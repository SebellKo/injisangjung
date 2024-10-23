import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Banner from '@/components/home/banner/Banner';
import Main from '@/components/home/main/Main';
import React from 'react';
import style from '@/styles/home/home.module.css';

async function Home() {
  const posts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
    method: 'GET',
    cache: 'no-store',
  }).then((response) => response.json());

  return (
    <div className={style.home}>
      <Banner></Banner>
      <Main posts={posts}></Main>
    </div>
  );
}

export default Home;
