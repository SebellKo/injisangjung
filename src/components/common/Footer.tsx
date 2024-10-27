import React from 'react';
import style from '@/styles/common/footer.module.css';
import Link from 'next/link';
import Email from './footer/Email';

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.content}>
        <h1 className={style.name}>© sebellko</h1>
        <ul className={style.contact_list}>
          <li>
            <Link
              key="linkedin"
              href="https://www.linkedin.com/in/sejong-ko-027710212/"
              target="_blank"
            >
              linkedin
            </Link>
          </li>
          <li>
            <Link
              key="instagram"
              href="https://www.instagram.com/_sebell/"
              target="_blank"
            >
              instagram
            </Link>
          </li>
          <Email></Email>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
