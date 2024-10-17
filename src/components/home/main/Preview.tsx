import React from 'react';
import style from '@/styles/home/main/preview.module.css';

interface Props {
  currentPost: {
    _id: string;
    postId: string;
    title: string;
    desc: string;
    previewUrl: string;
    category: string;
  } | null;
}

function Preview({ currentPost }: Props) {
  return (
    <div className={style.preview}>
      <img src={currentPost?.previewUrl} className={style.preview_image}></img>
      <p className={style.preview_desc}>{currentPost?.desc}</p>
    </div>
  );
}

export default Preview;
