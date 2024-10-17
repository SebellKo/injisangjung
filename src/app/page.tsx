import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Banner from '@/components/home/banner/Banner';
import Main from '@/components/home/main/Main';
import React from 'react';
import style from '@/styles/home/home.module.css';

async function Home() {
  const posts = await fetch('http://localhost:3000/api/posts', {
    method: 'GET',
  }).then((response) => response.json());

  return (
    <div className={style.home}>
      <Header></Header>
      <Banner></Banner>
      <Main posts={posts}></Main>
      <Footer></Footer>
    </div>
  );
}

export default Home;
