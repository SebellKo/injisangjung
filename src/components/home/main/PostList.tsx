'use client';

import React, { useState } from 'react';
import style from '@/styles/home/main/postlist.module.css';
import convertOrderNum from '@/utils/convertOrderNum';
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

function PostList({ posts }: Props) {
  const selectedPost = useSelectedPostStore((state) => state.selectedPost);
  const setSelectedPost = useSelectedPostStore(
    (state) => state.setSelectedPost
  );

  const handleClickPost = (index: number) => setSelectedPost(index);

  return (
    <ul className={style.post_list}>
      {posts.map((post, index) => (
        <li
          key={post._id}
          className={style.post_item}
          onClick={() => handleClickPost(index)}
        >
          <h3
            className={`${style.post_order} ${
              index === selectedPost ? style.active : ''
            }`}
          >
            {convertOrderNum(index + 1)}
          </h3>
          <h3
            className={`${style.post_order} ${
              index === selectedPost ? style.active : ''
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
