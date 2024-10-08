import React from 'react';
import style from '@/styles/new-post/main/new-post.module.css';
import Banner from './Banner';
import Editor from './Editor';

function NewPost() {
  return (
    <div className={style.new_post}>
      <Banner></Banner>
      <Editor></Editor>
    </div>
  );
}

export default NewPost;
