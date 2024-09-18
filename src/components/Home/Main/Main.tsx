import React from 'react';
import style from '@/styles/home/main/main.module.css';
import PostList from './PostList';
import CategoryList from './CategoryList';

function Main() {
  return (
    <main className={style.main}>
      <PostList></PostList>
      <CategoryList></CategoryList>
    </main>
  );
}

export default Main;
