import React from 'react';
import style from '@/styles/home/main/main.module.css';
import CategoryList from './CategoryList';
import Posts from './Posts';

function Main() {
  return (
    <div className={style.main}>
      <CategoryList></CategoryList>
      <Posts></Posts>
    </div>
  );
}

export default Main;
