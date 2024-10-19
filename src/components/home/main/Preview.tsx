import React from 'react';
import style from '@/styles/home/main/preview.module.css';
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

function Preview({ currentPost, selectedPostIndex }: Props) {
  return (
    <Link
      href={`/posts/${currentPost?.postId}?index=${selectedPostIndex}&category=${currentPost?.category}`}
    >
      <div className={style.preview}>
        <img
          src={currentPost?.previewUrl}
          className={style.preview_image}
        ></img>
        <p className={style.preview_desc}>{currentPost?.desc}</p>
      </div>
    </Link>
  );
}

export default Preview;
