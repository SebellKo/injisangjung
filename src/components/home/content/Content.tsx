'use client';

import React, { useState } from 'react';
import style from '@/styles/home/content/content.module.css';
import CategoryList from './category-list/CategoryList';
import PostsPreview from './posts-preview/PostsPreview';

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

function Content({ posts }: Props) {
  const [currentCategory, setCurrentCategory] = useState<string>('All');
  const filteredPost =
    currentCategory === 'All'
      ? posts
      : posts.filter((postItem) => postItem.category === currentCategory);

  return (
    <div className={style.main}>
      <CategoryList setCurrentCategory={setCurrentCategory}></CategoryList>
      <PostsPreview posts={filteredPost}></PostsPreview>
    </div>
  );
}

export default Content;
