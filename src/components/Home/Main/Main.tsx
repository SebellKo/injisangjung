import React from 'react';
import style from '@/styles/home/main/main.module.css';
import PostList from './PostList';

function Main() {
  return (
    <main className={style.main}>
      <PostList></PostList>
      <div className={style.category_list_container}></div>
    </main>
  );
}

export default Main;
