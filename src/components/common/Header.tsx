import React from 'react';
import style from '@/styles/common/header.module.css';

function Header() {
  return (
    <div className={style.header}>
      <h2 className={style.logo}>injisangjung</h2>
      <h2 className={style.new_post}>post</h2>
    </div>
  );
}

export default Header;
