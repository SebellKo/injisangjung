'use client';

import React, { useState } from 'react';
import style from '@/styles/home/main/postlist.module.css';

const mock = [
  {
    order: 1,
    title: 'Example Title',
  },
  {
    order: 2,
    title: 'Neque porro quisquam est qui dolorem',
  },
  {
    order: 3,
    title:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  },
  {
    order: 1,
    title: 'Example Title',
  },
  {
    order: 2,
    title: 'Neque porro quisquam est qui dolorem',
  },
  {
    order: 3,
    title:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  },
];

const convertOrderNum = (order: number) => {
  if (order < 10) return `00${order}`;
  if (order < 100 && order >= 10) return `0${order}`;
  return order;
};

function PostList() {
  const [selected, setSelected] = useState<number>();

  const handleClickPost = (index: number) => {
    console.log('click');
    setSelected(index);
  };

  return (
    <ul className={style.post_list}>
      {mock.map((post, index) => (
        <li className={style.post_item} onClick={() => handleClickPost(index)}>
          <h3
            className={`${style.post_order} ${
              index === selected ? style.active : ''
            }`}
          >
            {convertOrderNum(post.order)}
          </h3>
          <h3
            className={`${style.post_order} ${
              index === selected ? style.active : ''
            }`}
          >
            {post.title}
          </h3>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
