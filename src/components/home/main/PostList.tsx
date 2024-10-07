import React from 'react';
import style from '@/styles/home/main/postlist.module.css';

function PostList() {
  return (
    <ul className={style.post_list}>
      <li className={style.post_item}>
        <h3 className={style.post_order}>001</h3>
        <h3 className={style.post_title}>Example Title</h3>
      </li>
      <li className={style.post_item}>
        <h3 className={style.post_order}>002</h3>
        <h3 className={style.post_title}>
          Neque porro quisquam est qui dolorem
        </h3>
      </li>
      <li className={style.post_item}>
        <h3 className={style.post_order}>003</h3>
        <h3 className={style.post_title}>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit
        </h3>
      </li>
      <li className={style.post_item}>
        <h3 className={style.post_order}>004</h3>
        <h3 className={style.post_title}>Example Title</h3>
      </li>
      <li className={style.post_item}>
        <h3 className={style.post_order}>005</h3>
        <h3 className={style.post_title}>Example Title</h3>
      </li>
      <li className={style.post_item}>
        <h3 className={style.post_order}>006</h3>
        <h3 className={style.post_title}>Example Title</h3>
      </li>
      <li className={style.post_item}>
        <h3 className={style.post_order}>007</h3>
        <h3 className={style.post_title}>Example Title</h3>
      </li>
    </ul>
  );
}

export default PostList;
