import React from 'react';
import style from '@/styles/posts/banner.module.css';

function Banner() {
  return (
    <div className={style.banner}>
      <div className={style.list_container}>
        <div className={style.list_header}>
          <div className={style.category_wrapper}>
            <h3 className={style.category_name}>Tech</h3>
            <p className={style.post_num}>(20 posts)</p>
          </div>
          <ul className={style.pagination_wrapper}>
            <li className={style.pagination_item}>1</li>
            <li className={style.pagination_item}>2</li>
            <li className={style.pagination_item}>3</li>
            <li className={style.pagination_item}>4</li>
            <li className={style.pagination_item}>5</li>
          </ul>
        </div>
        <ul className={style.post_list}>
          <li className={style.post_list_item}>
            <div className={style.order_title}>
              <h3 className={style.order}>001</h3>
              <h3 className={style.title}>Example Title</h3>
            </div>
            <p className={style.date}>2024.01.01</p>
          </li>
          <li className={style.post_list_item}>
            <div className={style.order_title}>
              <h3 className={style.order}>001</h3>
              <h3 className={style.title}>Example Title</h3>
            </div>
            <p className={style.date}>2024.01.01</p>
          </li>
          <li className={style.post_list_item}>
            <div className={style.order_title}>
              <h3 className={style.order}>001</h3>
              <h3 className={style.title}>Example Title</h3>
            </div>
            <p className={style.date}>2024.01.01</p>
          </li>
          <li className={style.post_list_item}>
            <div className={style.order_title}>
              <h3 className={style.order}>001</h3>
              <h3 className={style.title}>Example Title</h3>
            </div>
            <p className={style.date}>2024.01.01</p>
          </li>
          <li className={style.post_list_item}>
            <div className={style.order_title}>
              <h3 className={style.order}>001</h3>
              <h3 className={style.title}>Example Title</h3>
            </div>
            <p className={style.date}>2024.01.01</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Banner;
