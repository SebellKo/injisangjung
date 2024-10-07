import React from 'react';
import style from '@/styles/common/footer.module.css';

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.content}>
        <h3 className={style.name}>© sebellko</h3>
        <ul className={style.contact_list}>
          <li>linkedin</li>
          <li>instagram</li>
          <li>email</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
