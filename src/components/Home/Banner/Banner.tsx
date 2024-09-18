import React from 'react';
import style from '@/styles/home/banner/banner.module.css';
import Title from './Title';
import AnimationSection from './AnimationSection';

function Banner() {
  return (
    <div className={style.banner}>
      <Title></Title>
      <AnimationSection></AnimationSection>
    </div>
  );
}

export default Banner;
