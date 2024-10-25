import React from 'react';
import style from '@/styles/posts/content/content.module.css';
import Detail from './Detail';
import Toc from './Toc';

interface Props {
  postId: string;
}

async function Content({ postId }: Props) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${postId}`
  );
  const { result: postData } = await response.json();

  return (
    <div className={style.content_container}>
      <Toc content={postData.content}></Toc>
      <Detail
        detail={{
          title: postData.title,
          date: postData.date,
          content: postData.content,
        }}
      ></Detail>
    </div>
  );
}

export default Content;
