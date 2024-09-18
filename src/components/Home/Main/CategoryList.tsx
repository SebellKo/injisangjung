import React from 'react';
import style from '@/styles/home/main/categorylist.module.css';
import CategoryListItem from './CategoryListItem';

function CategoryList() {
  return (
    <div className={style.category_list_container}>
      <ul className={style.category_list}>
        <CategoryListItem></CategoryListItem>
        <CategoryListItem></CategoryListItem>
        <CategoryListItem></CategoryListItem>
        <CategoryListItem></CategoryListItem>
      </ul>
    </div>
  );
}

export default CategoryList;
