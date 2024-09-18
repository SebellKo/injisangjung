import React from 'react';
import style from '@/styles/home/banner/animation-section.module.css';
import Bar from './Bar';

function AnimationSection() {
  return (
    <div className={style.animation_section}>
      {Array.from({ length: 4 }, (_, index) => index).map(() => (
        <Bar></Bar>
      ))}
    </div>
  );
}

export default AnimationSection;
