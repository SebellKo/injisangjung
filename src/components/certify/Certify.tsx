'use client';

import React, { MouseEvent, useState } from 'react';
import style from '@/styles/certify/certify.module.css';
import { useRouter } from 'next/navigation';
import useCertify from '@/hooks/useCertify';

function Certify() {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const { handleCertify } = useCertify();

  const handleClickCertify = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await handleCertify(id, password);
    router.push('/');
  };

  return (
    <div className={style.certify_container}>
      <form className={style.certify_form}>
        <h1 className={style.title}>injisangjung</h1>
        <div className={style.input_wrapper}>
          <input
            className={style.login_input}
            type="text"
            value={id}
            onChange={(event) => setId(event.target.value)}
          ></input>
          <input
            className={style.login_input}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <button
          className={style.certify_button}
          onClick={(event) => handleClickCertify(event)}
        >
          certify
        </button>
      </form>
    </div>
  );
}

export default Certify;
