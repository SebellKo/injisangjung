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
}

function Preview({ currentPost }: Props) {
  const imageUrl = currentPost?.previewUrl || PREVIEW_DEFAULT_IMAGE;
  const previewDesc = currentPost?.desc || PREVIEW_DEFAULT_DESC;
  const postLink = currentPost
    ? `/posts/${currentPost.postId}?category=${currentPost.category}`
    : null;

  const PreviewContent = (
    <div className={style.preview}>
      <img src={imageUrl} className={style.preview_image} alt="preview image" />
      <p className={style.preview_desc}>{previewDesc}</p>
    </div>
  );

  return postLink ? (
    <Link href={postLink}>{PreviewContent}</Link>
  ) : (
    PreviewContent
  );
}

export default Preview;
