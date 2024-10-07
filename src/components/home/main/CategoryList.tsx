import React from 'react';
import style from '@/styles/home/main/categorylist.module.css';

function CategoryList() {
  return (
    <ul className={style.category_list}>
      <li className={style.category_item}>
        <h3 className={style.category_name}>Tech</h3>
        <p className={style.category_desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </li>
      <li className={style.category_item}>
        <h3 className={style.category_name}>Writing</h3>
      </li>
      <li className={style.category_item}>
        <h3 className={style.category_name}>Daily</h3>
      </li>
      <li className={style.category_item}>
        <h3 className={style.category_name}>Project</h3>
      </li>
    </ul>
  );
}

export default CategoryList;
