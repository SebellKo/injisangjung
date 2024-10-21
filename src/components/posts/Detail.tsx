'use client';

import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import style from '@/styles/posts/content.module.css';

interface Props {
  detail: {
    title: string;
    date: Date;
    content: string;
  };
}

function Detail({ detail }: Props) {
  return (
    <div className={style.post_content}>
      <div className={style.post_info}>
        <h1 className={style.post_title}>{detail.title}</h1>
        <h3 className={style.post_date}>{String(detail.date).slice(0, 10)}</h3>
        <h3 className={style.post_author}>sebellko</h3>
      </div>
      <div className="markdownDiv" data-color-mode="light">
        <MDEditor.Markdown source={detail.content}></MDEditor.Markdown>
      </div>
    </div>
  );
}

export default Detail;
