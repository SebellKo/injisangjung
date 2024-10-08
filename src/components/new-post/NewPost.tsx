import React from 'react';
import style from '@/styles/new-post/main/new-post.module.css';
import Banner from './Banner';

function NewPost() {
  return (
    <div className={style.new_post}>
      <Banner></Banner>
    </div>
  );
}

export default NewPost;
