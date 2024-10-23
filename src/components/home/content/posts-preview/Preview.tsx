import React from 'react';
import style from '@/styles/home/content/posts-preview/preview.module.css';
import Link from 'next/link';

interface Props {
  currentPost: {
    _id: string;
    postId: string;
    title: string;
    desc: string;
    previewUrl: string;
    category: string;
  } | null;
  selectedPostIndex: number | undefined;
}

function Preview({ currentPost }: Props) {
  const imageUrl =
    currentPost === null
      ? '/assets/images/preview_default.jpeg'
      : currentPost.previewUrl;
  const previewDesc =
    currentPost === null
      ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      : currentPost.desc;
  return (
    <Link
      href={`/posts/${currentPost?.postId}?category=${currentPost?.category}`}
    >
      <div className={style.preview}>
        <img
          src={imageUrl}
          className={style.preview_image}
          alt="preview image"
        ></img>
        <p className={style.preview_desc}>{previewDesc}</p>
      </div>
    </Link>
  );
}

export default Preview;
