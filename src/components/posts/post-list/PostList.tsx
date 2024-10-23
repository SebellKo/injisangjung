'use client';

import React, { useEffect, useState } from 'react';
import style from '@/styles/posts/post-list/post-list.module.css';
import { useParams, useSearchParams } from 'next/navigation';
import PostListHeader from './PostListHeader';
import PostListContent from './PostListContent';
import { PostPreviewRes } from '@/models/posts';

interface ExtendPostPrevewRes extends PostPreviewRes {
  date: Date;
}

function PostList() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const { postId } = useParams<{ postId: string }>();

  const [currentPage, setCurrentPage] = useState<number | null>(null);
  const [postPreviews, setPostPreviews] = useState<ExtendPostPrevewRes[]>([]);
  const [totalPost, settotalPost] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    fetch(
      `/api/posts/pagination?postId=${postId}&category=${category}&currentPage=${currentPage}`
    )
      .then((response) => response.json())
      .then((result) => {
        setPostPreviews(result.postPreviews);
        setCurrentPage(result.currentPage);
        settotalPost(result.totalPost);
        setTotalPage(result.totalPage);
      });
  }, [currentPage]);

  return (
    <div className={style.post_list}>
      <div className={style.list_container}>
        <PostListHeader
          paginationData={{ totalPost, totalPage, currentPage }}
          setCurrentPage={setCurrentPage}
        ></PostListHeader>
        <PostListContent postPreviews={postPreviews}></PostListContent>
      </div>
    </div>
  );
}

export default PostList;
