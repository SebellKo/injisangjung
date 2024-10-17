import React from 'react';
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
  return (
    <div className={style.main}>
      <CategoryList></CategoryList>
      <Posts posts={posts}></Posts>
    </div>
  );
}

export default Main;
