import React from 'react';
import style from '@/styles/home/main/categorylist-item.module.css';

function CategoryListItem() {
  return (
    <li className={style.category_item}>
      <h3 className={style.category}>Tech</h3>
      <p className={style.category_desc}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
    </li>
  );
}

export default CategoryListItem;
