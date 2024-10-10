import React from 'react';
import style from '@/styles/certify/certify.module.css';

function Certify() {
  return (
    <div className={style.certify_container}>
      <form className={style.certify_form}>
        <h1 className={style.title}>injisangjung</h1>
        <div className={style.input_wrapper}>
          <input className={style.login_input} type="text"></input>
          <input className={style.login_input} type="password"></input>
        </div>
        <button className={style.certify_button}>certify</button>
      </form>
    </div>
  );
}

export default Certify;
