import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import style from '@/styles/new-post/banner/post-upload.module.css';
import CATEGORY from '@/constant/category';

interface Props {
  postValue?: string;
  postInfo: {
    title: string;
    desc: string;
  };
}

function PostUpload({ postValue, postInfo }: Props) {
  const router = useRouter();
  const [category, setCategory] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const handleClickPost = async () => {
    const body = {
      title: postInfo.title,
      desc: postInfo.desc,
      category: category,
      postContent: postValue,
      previewUrl: previewUrl,
    };

    const response = await fetch('api/posts/make-post', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      },
    });

    const { ok } = await response.json();

    if (ok) router.push('/');
  };

  return (
    <div className={style.interaction_section}>
      <div className={style.button_with_drop_down}>
        <ul className={style.button_wrapper}>
          <li>
            <input
              className={style.image_input}
              type="text"
              placeholder="image url"
              onChange={(event) => setPreviewUrl(event.target.value)}
            ></input>
          </li>
          <li>
            <button
              className={style.button}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {category === '' ? 'category' : category}
              <img
                className={style.drop_down_icon}
                src="/assets/icons/drop-down.svg"
              ></img>
            </button>
          </li>
          <li>
            <button className={style.button} onClick={handleClickPost}>
              post
            </button>
          </li>
        </ul>
        {isMenuOpen && (
          <ul className={style.drop_down_menu}>
            {CATEGORY.map((categoryItem) => (
              <li
                className={style.drop_down_menu_item}
                onClick={() => {
                  setCategory(categoryItem.title);
                  setIsMenuOpen(false);
                }}
              >
                {categoryItem.title}
              </li>
            ))}
          </ul>
        )}
      </div>
      {previewUrl === '' ? (
        <div className={style.empty_box}></div>
      ) : (
        <img
          className={style.preview_image}
          src={previewUrl}
          alt="preview image"
        ></img>
      )}
    </div>
  );
}

export default PostUpload;
