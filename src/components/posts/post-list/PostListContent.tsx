import React from 'react';
import style from '@/styles/posts/post-list/post-list-content.module.css';
import { useParams, useRouter } from 'next/navigation';
import convertOrderNum from '@/utils/convertOrderNum';

interface Props {
  postPreviews?:
    | {
        _id: string;
        postId: string;
        title: string;
        desc: string;
        previewUrl: string;
        category: string;
        date: Date;
      }[];
}

function PostListContent({ postPreviews }: Props) {
  const router = useRouter();
  const { postId } = useParams<{ postId: string }>();

  return (
    <ul className={style.post_list}>
      {postPreviews?.map((postItem, index) => (
        <li
          key={postItem._id}
          className={style.post_list_item}
          onClick={() =>
            router.push(
              `/posts/${postItem.postId}?category=${postItem.category}`
            )
          }
        >
          <div className={style.order_title}>
            <h3
              className={`${style.order} ${
                postItem.postId === postId && style.active_order
              }`}
            >
              {convertOrderNum(index + 1)}
            </h3>
            <h3
              className={`${style.title} ${
                postItem.postId === postId && style.active_title
              }`}
            >
              {postItem.title}
            </h3>
          </div>
          <p className={style.date}>{String(postItem.date).slice(0, 10)}</p>
        </li>
      ))}
    </ul>
  );
}

export default PostListContent;
