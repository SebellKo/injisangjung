import Banner from '@/components/home/banner/Banner';
import Content from '@/components/home/content/Content';
import React from 'react';
import style from '@/styles/home/home-page.module.css';

async function HomePage() {
  const posts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
    method: 'GET',
    cache: 'no-store',
  }).then((response) => response.json());

  return (
    <div className={style.home}>
      <Banner></Banner>
      <Content posts={posts}></Content>
    </div>
  );
}

export default HomePage;
