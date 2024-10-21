'use client';

import React from 'react';
import style from '@/styles/common/header.module.css';
import useCertify from '@/hooks/useCertify';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function Header() {
  const { isAdmin } = useCertify();
  const router = useRouter();

  const handleClickPost = () => router.push('/new-post');

  return (
    <div className={style.header}>
      <Link href="/">
        <h2 className={style.logo}>injisangjung</h2>
      </Link>
      {isAdmin && (
        <h2 className={style.new_post} onClick={handleClickPost}>
          post
        </h2>
      )}
    </div>
  );
}

export default Header;
