'use client';

import React, { useEffect, useState } from 'react';
import style from '@/styles/posts/banner.module.css';
import convertOrderNum from '@/utils/convertOrderNum';
import { useParams, useSearchParams } from 'next/navigation';

type PostPreview = {
  _id: string;
  postId: string;
  title: string;
  desc: string;
  previewUrl: string;
  category: string;
  date: Date;
};

function Banner() {
  const searchParams = useSearchParams();
  const { postId } = useParams<{ postId: string }>();
  const category = searchParams.get('category');

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [postPreviews, setPostPreviews] = useState<PostPreview[]>();
  const [totalPost, settotalPost] = useState<number>();
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
    <div className={style.banner}>
      <div className={style.list_container}>
        <div className={style.list_header}>
          <div className={style.category_wrapper}>
            <h3 className={style.category_name}>{category}</h3>
            <p className={style.post_num}>{`${totalPost} posts`}</p>
          </div>
          <ul className={style.pagination_wrapper}>
            {Array.from({ length: totalPage }, (_, index) => index + 1).map(
              (pageItem, index) => (
                <li
                  key={index}
                  className={`${style.pagination_item} ${
                    index === currentPage && style.active_pagination_item
                  }`}
                  onClick={() => setCurrentPage(index)}
                >
                  {pageItem}
                </li>
              )
            )}
          </ul>
        </div>
        <ul className={style.post_list}>
          {postPreviews?.map((postItem, index) => (
            <li key={postItem._id} className={style.post_list_item}>
              <div className={style.order_title}>
                <h3
                  className={`${style.order} ${
                    postItem.postId === postId && style.active_order
                  }`}
                >
                  {convertOrderNum(index + 1)}
                </h3>
                <h3
                  className={`${style.title} ${
                    postItem.postId === postId && style.active_title
                  }`}
                >
                  {postItem.title}
                </h3>
              </div>
              <p className={style.date}>{String(postItem.date).slice(0, 10)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Banner;
