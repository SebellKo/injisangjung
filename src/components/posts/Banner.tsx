'use client';

import React, { useState } from 'react';
import style from '@/styles/posts/banner.module.css';
import convertOrderNum from '@/utils/convertOrderNum';

const mockPost = [
  {
    order: 1,
    title: 'Example Title',
    date: '2024.01.01',
  },
  {
    order: 2,
    title: 'Example Title',
    date: '2024.01.01',
  },
  {
    order: 3,
    title: 'Example Title',
    date: '2024.01.01',
  },
  {
    order: 4,
    title: 'Example Title',
    date: '2024.01.01',
  },
  {
    order: 5,
    title: 'Example Title',
    date: '2024.01.01',
  },
];

const mockPage = [1, 2, 3, 4, 5];

function Banner() {
  const [selected, setSelected] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(0);

  return (
    <div className={style.banner}>
      <div className={style.list_container}>
        <div className={style.list_header}>
          <div className={style.category_wrapper}>
            <h3 className={style.category_name}>Tech</h3>
            <p className={style.post_num}>(20 posts)</p>
          </div>
          <ul className={style.pagination_wrapper}>
            {mockPage.map((pageItem, index) => (
              <li
                className={`${style.pagination_item} ${
                  index === currentPage && style.active_pagination_item
                }`}
              >
                {pageItem}
              </li>
            ))}
          </ul>
        </div>
        <ul className={style.post_list}>
          {mockPost.map((postItem) => (
            <li className={style.post_list_item}>
              <div className={style.order_title}>
                <h3
                  className={`${style.order} ${
                    postItem.order === selected && style.active_order
                  }`}
                >
                  {convertOrderNum(postItem.order)}
                </h3>
                <h3
                  className={`${style.title} ${
                    postItem.order === selected && style.active_title
                  }`}
                >
                  {postItem.title}
                </h3>
              </div>
              <p className={style.date}>{postItem.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Banner;
