'use client';

import React, { useState } from 'react';
import style from '@/styles/new-post/banner/banner.module.css';
import PostInfo from './PostInfo';
import PostUpload from './PostUpload';

interface Props {
  postValue?: string;
}

function Banner({ postValue }: Props) {
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  return (
    <div className={style.banner}>
      <PostInfo setTitle={setTitle} setDesc={setDesc}></PostInfo>
      <PostUpload
        postValue={postValue}
        postInfo={{ title: title, desc: desc }}
      ></PostUpload>
    </div>
  );
}

export default Banner;
