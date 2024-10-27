import React from 'react';
import style from '@/styles/common/footer.module.css';
import Link from 'next/link';
import Email from './footer/Email';

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.content}>
        <h3 className={style.name}>© sebellko</h3>
        <ul className={style.contact_list}>
          <Link
            key="linkedin"
            href="https://www.linkedin.com/in/sejong-ko-027710212/"
            target="_blank"
          >
            <li>linkedin</li>
          </Link>
          <Link
            key="instagram"
            href="https://www.instagram.com/_sebell/"
            target="_blank"
          >
            <li>instagram</li>
          </Link>
          <Email></Email>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
