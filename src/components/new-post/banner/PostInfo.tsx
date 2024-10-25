import React from 'react';
import style from '@/styles/new-post/banner/post-info.module.css';

interface Props {
  setTitle: (value: string) => void;
  setDesc: (value: string) => void;
}

function PostInfo({ setTitle, setDesc }: Props) {
  return (
    <div className={style.info}>
      <input
        type="text"
        className={style.title}
        placeholder="Title"
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <textarea
        className={style.desc}
        placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        onChange={(event) => setDesc(event.target.value)}
      ></textarea>
    </div>
  );
}

export default PostInfo;
