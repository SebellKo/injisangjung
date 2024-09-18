import React from 'react';
import style from '@/styles/header.module.css';

function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <h2 className={style.logo}>injisangjung</h2>
      </nav>
    </header>
  );
}

export default Header;
