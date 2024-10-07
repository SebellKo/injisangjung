import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Banner from '@/components/home/banner/Banner';
import Main from '@/components/home/main/Main';
import React from 'react';
import style from '@/styles/home/home.module.css';

function Home() {
  return (
    <div className={style.home}>
      <Header></Header>
      <Banner></Banner>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default Home;
