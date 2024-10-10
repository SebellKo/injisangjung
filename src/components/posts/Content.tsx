'use client';

import React from 'react';
import style from '@/styles/posts/content.module.css';
import MDEditor from '@uiw/react-md-editor';

function Content() {
  return (
    <div className={style.content_container}>
      <div className={style.anchor_list_container}>
        <ul className={style.anchor_list}>
          <li className={style.anchor_list_item}>
            <h2 className={style.main_anchor}>Example Title</h2>
            <div>
              <h3 className={style.sub_anchor}>Example Title</h3>
              <h3 className={style.sub_anchor}>Example Title</h3>
            </div>
          </li>
        </ul>
      </div>
      <div className={style.post_content}>
        <div className={style.post_info}>
          <h1 className={style.post_title}>Example Title</h1>
          <h3 className={style.post_date}>2024. 01. 01</h3>
          <h3 className={style.post_author}>sebellko</h3>
        </div>
        <div className="markdownDiv" data-color-mode="light">
          <MDEditor.Markdown source="<h1>hello world</h1>"></MDEditor.Markdown>
        </div>
      </div>
    </div>
  );
}

export default Content;
