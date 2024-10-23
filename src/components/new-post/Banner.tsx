'use client';

import React, { useState } from 'react';
import style from '@/styles/new-post/main/banner.module.css';
import { useRouter } from 'next/navigation';

const categories = ['Tech', 'Writing', 'Daily', 'Project'];

interface Props {
  postValue: string | undefined;
}

function Banner({ postValue }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const router = useRouter();

  const handleClickPost = async () => {
    const body = {
      title: title,
      desc: desc,
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
    <div className={style.banner}>
      <div className={style.info}>
        <input
          type="text"
          className={style.title}
          placeholder="Title"
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <textarea
          className={style.desc}
          placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          onChange={(event) => setDesc(event.target.value)}
        ></textarea>
      </div>
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
              {categories.map((categoryItem) => (
                <li
                  className={style.drop_down_menu_item}
                  onClick={() => {
                    setCategory(categoryItem);
                    setIsMenuOpen(false);
                  }}
                >
                  {categoryItem}
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
    </div>
  );
}

export default Banner;
