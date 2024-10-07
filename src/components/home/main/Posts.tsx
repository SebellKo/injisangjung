import React from 'react';
import style from '@/styles/home/main/posts.module.css';
import PostList from './PostList';
import Preview from './Preview';

function Posts() {
  return (
    <div className={style.posts}>
      <PostList></PostList>
      <Preview></Preview>
    </div>
  );
}

export default Posts;
