'use client';

import React, { useState } from 'react';
import style from '@/styles/new-post/new-post-page.module.css';
import Banner from './banner/Banner';
import Editor from './Editor';

function NewPost() {
  const [postValue, setPostValue] = useState<string | undefined>(
    '내용을 입력해 주세요.'
  );
  return (
    <div className={style.new_post}>
      <Banner postValue={postValue}></Banner>
      <Editor postValue={postValue} setPostValue={setPostValue}></Editor>
    </div>
  );
}

export default NewPost;
