import React from 'react';
import Banner from './Banner';
import Content from './Content';
import style from '@/styles/posts/post.module.css';

function Post() {
  return (
    <div className={style.post}>
      <Banner></Banner>
      <Content></Content>
    </div>
  );
}

export default Post;
