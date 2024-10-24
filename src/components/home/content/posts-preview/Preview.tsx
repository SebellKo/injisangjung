import React from 'react';
import style from '@/styles/home/content/posts-preview/preview.module.css';
import Link from 'next/link';
import { PostPreviewRes } from '@/models/posts';
import {
  PREVIEW_DEFAULT_DESC,
  PREVIEW_DEFAULT_IMAGE,
} from '@/constant/preview';

interface Props {
  currentPost: PostPreviewRes | null;
  selectedPostIndex?: number;
}

function Preview({ currentPost }: Props) {
  const imageUrl =
    currentPost === null ? PREVIEW_DEFAULT_IMAGE : currentPost.previewUrl;
  const previewDesc =
    currentPost === null ? PREVIEW_DEFAULT_DESC : currentPost.desc;

  return (
    <Link
      href={`/posts/${currentPost?.postId}?category=${currentPost?.category}`}
    >
      <div className={style.preview}>
        <img
          src={imageUrl}
          className={style.preview_image}
          alt="preview image"
        ></img>
        <p className={style.preview_desc}>{previewDesc}</p>
      </div>
    </Link>
  );
}

export default Preview;
