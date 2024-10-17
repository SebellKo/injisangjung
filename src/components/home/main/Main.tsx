'use client';

import React, { useState } from 'react';
import style from '@/styles/home/main/main.module.css';
import CategoryList from './CategoryList';
import Posts from './Posts';

interface Props {
  posts: {
    _id: string;
    postId: string;
    title: string;
    desc: string;
    previewUrl: string;
    category: string;
  }[];
}

function Main({ posts }: Props) {
  const [currentCategory, setCurrentCategory] = useState<string>('All');
  const filteredPost =
    currentCategory === 'All'
      ? posts
      : posts.filter((postItem) => postItem.category === currentCategory);

  return (
    <div className={style.main}>
      <CategoryList setCurrentCategory={setCurrentCategory}></CategoryList>
      <Posts posts={filteredPost}></Posts>
    </div>
  );
}

export default Main;
