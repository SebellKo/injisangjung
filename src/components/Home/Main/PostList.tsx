import React from 'react';
import style from '@/styles/home/main/postlist.module.css';
import PostListItem from './PostListItem';

function PostList() {
  return (
    <div className={style.post_list_container}>
      <ul className={style.post_list}>
        <PostListItem></PostListItem>
        <PostListItem></PostListItem>
        <PostListItem></PostListItem>
        <PostListItem></PostListItem>
      </ul>
    </div>
  );
}

export default PostList;
