'use client';

import React, { useState } from 'react';
import style from '@/styles/home/main/categorylist.module.css';

const mock = [
  {
    title: 'All',
  },
  {
    title: 'Tech',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    title: 'Writing',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    title: 'Daily',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    title: 'Project',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
];

function CategoryList() {
  const [selected, setSelected] = useState<number>(0);

  const handleClickCategory = (index: number) => {
    setSelected(index);
  };

  return (
    <ul className={style.category_list}>
      {mock.map((category, index) => (
        <li
          className={style.category_item}
          onClick={() => handleClickCategory(index)}
        >
          <h3
            className={`${style.category_name} ${
              index === selected ? style.active : ''
            }`}
          >
            {category.title}
          </h3>
          {selected === index && index !== 0 && (
            <p className={style.category_desc}>{category.description}</p>
          )}
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
