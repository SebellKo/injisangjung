import React from 'react';
import style from '@/styles/home/banner/bar.module.css';

function Bar() {
  return (
    <div className={style.bar_wrapper}>
      {Array.from({ length: 15 }, (_, index) => index).map(() => (
        <div className={style.bar}></div>
      ))}
    </div>
  );
}

export default Bar;
