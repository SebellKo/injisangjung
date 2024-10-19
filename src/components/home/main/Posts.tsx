'use client';

import React, { useState } from 'react';
import style from '@/styles/home/main/posts.module.css';
import PostList from './PostList';
import Preview from './Preview';
import useSelectedPostStore from '@/store/useSelectedPostStore';

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

function Posts({ posts }: Props) {
  const selectedPost = useSelectedPostStore((state) => state.selectedPost);
  const currentPost = selectedPost !== undefined ? posts[selectedPost] : null;

  return (
    <div className={style.posts}>
      <PostList posts={posts}></PostList>
      <Preview
        currentPost={currentPost}
        selectedPostIndex={selectedPost}
      ></Preview>
    </div>
  );
}

export default Posts;
