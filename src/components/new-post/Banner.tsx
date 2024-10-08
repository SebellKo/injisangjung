'use client';

import React, { useState } from 'react';
import style from '@/styles/new-post/main/banner.module.css';

function Banner() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleClickCategory = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className={style.banner}>
      <div className={style.info}>
        <input type="text" className={style.title} placeholder="Title"></input>
        <textarea
          className={style.desc}
          placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        ></textarea>
      </div>
      <div className={style.interaction_section}>
        <div className={style.button_with_drop_down}>
          <ul className={style.button_wrapper}>
            <li>
              <button className={style.button} onClick={handleClickCategory}>
                category
                <img
                  className={style.drop_down_icon}
                  src="/assets/icons/drop-down.svg"
                ></img>
              </button>
            </li>
            <li>
              <button className={style.button}>image</button>
            </li>
            <li>
              <button className={style.button}>post</button>
            </li>
          </ul>
          {isMenuOpen && (
            <ul className={style.drop_down_menu}>
              <li className={style.drop_down_menu_item}>Tech</li>
              <li className={style.drop_down_menu_item}>Writing</li>
              <li className={style.drop_down_menu_item}>Daily</li>
              <li className={style.drop_down_menu_item}>Project</li>
            </ul>
          )}
        </div>
        <img
          className={style.preview_image}
          src="/assets/images/IMG_6223.jpeg"
        ></img>
      </div>
    </div>
  );
}

export default Banner;
