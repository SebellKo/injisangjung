'use client';

import React, { useEffect, useState } from 'react';
import style from '@/styles/posts/content.module.css';
import Detail from './Detail';
import { useParams } from 'next/navigation';
import Toc from './Toc';

function Content() {
  const params = useParams();
  const { postId } = params;
  const [postData, setPostData] = useState({
    category: '',
    content: '',
    date: new Date(),
    title: '',
    _id: '',
  });

  useEffect(() => {
    const fetchPostContent = async () => {
      const response = await fetch(`/api/posts/${postId}`);
      const data = await response.json();
      setPostData(data.result);
    };
    if (postId) fetchPostContent();
  }, [postId]);

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
