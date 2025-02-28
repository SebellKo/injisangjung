'use client';

import React, { useState } from 'react';
import style from '@/styles/home/content/category-list/category-list.module.css';
import useSelectedPostStore from '@/store/useSelectedPostStore';
import CATEGORY from '@/constant/category';

interface Props {
  setCurrentCategory: (value: string) => void;
}

function CategoryList({ setCurrentCategory }: Props) {
  const [selected, setSelected] = useState<number>(0);
  const resetSelectedPost = useSelectedPostStore(
    (state) => state.resetSelectedPost
  );

  const handleClickCategory = (category: string, index: number) => {
    setSelected(index);
    setCurrentCategory(category);
    resetSelectedPost();
  };

  return (
    <ul className={style.category_list}>
      {CATEGORY.map((category, index) => (
        <li
          key={index}
          className={style.category_item}
          onClick={() => handleClickCategory(category.title, index)}
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
