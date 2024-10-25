'use client';

import React from 'react';
import style from '@/styles/home/content/posts-preview/post-list.module.css';
import convertOrderNum from '@/utils/convertOrderNum';
import useSelectedPostStore from '@/store/useSelectedPostStore';

import { PostPreviewRes } from '@/models/posts';

interface Props {
  posts: PostPreviewRes[];
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
          key={String(post._id)}
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
