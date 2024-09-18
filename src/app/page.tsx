import React from 'react';
import style from '@/styles/home/home.module.css';
import Header from '@/components/common/Header';
import Banner from '@/components/Home/Banner/Banner';
import Main from '@/components/Home/Main/Main';

function Home() {
  return (
    <div className={style.container}>
      <Header></Header>
      <Banner></Banner>
      <Main></Main>
    </div>
  );
}

export default Home;
