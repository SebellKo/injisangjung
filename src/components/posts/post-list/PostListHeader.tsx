import React from 'react';
import style from '@/styles/posts/post-list/post-list-header.module.css';
import { useSearchParams } from 'next/navigation';

interface Props {
  paginationData: {
    totalPost: number;
    totalPage: number;
    currentPage: number | null;
  };
  setCurrentPage: (value: number) => void;
}

function PostListHeader({ paginationData, setCurrentPage }: Props) {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const { totalPost, totalPage, currentPage } = paginationData;

  return (
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
  );
}

export default PostListHeader;
