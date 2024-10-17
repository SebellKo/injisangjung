'use client';

import React, { useState } from 'react';
import style from '@/styles/home/main/posts.module.css';
import PostList from './PostList';
import Preview from './Preview';

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
  const [selectedPost, setSelectedPost] = useState<number | undefined>();
  const currentPost = selectedPost !== undefined ? posts[selectedPost] : null;
  console.log(currentPost);

  return (
    <div className={style.posts}>
      <PostList
        posts={posts}
        selectedPost={selectedPost}
        setSelectedPost={setSelectedPost}
      ></PostList>
      <Preview currentPost={currentPost}></Preview>
    </div>
  );
}

export default Posts;
