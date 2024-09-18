import React from 'react';
import style from '@/styles/home/main/postlist-item.module.css';

function PostListItem() {
  return (
    <li className={style.post_item}>
      <div className={style.item_summary_wrapper}>
        <h2 className={style.item_order_num}>001</h2>
        <div className={style.item_summary}>
          <h2 className={style.item_title}>Example Title</h2>
          <p className={style.item_desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
      <div className={style.item_image_wrapper}>
        <img
          className={style.item_image}
          src="/assets/images/IMG_4547.JPG"
        ></img>
        <img
          className={style.item_image}
          src="/assets/images/IMG_6223.jpeg"
        ></img>
        <img
          className={style.item_image}
          src="/assets/images/IMG_6235.jpeg"
        ></img>
        <img
          className={style.item_image}
          src="/assets/images/IMG_6311.jpeg"
        ></img>
      </div>
    </li>
  );
}

export default PostListItem;
