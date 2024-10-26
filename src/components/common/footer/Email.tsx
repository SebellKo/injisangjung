'use client';

import { useState } from 'react';
import React from 'react';

function Email() {
  const [text, setText] = useState<string>('email');

  const handleClickEmail = async () => {
    if (text === 'email') setText('fulfilled_@naver.com');
    if (text === 'fulfilled_@naver.com') {
      await navigator.clipboard.writeText('fulfilled_@naver.com');
      setText('copied !');
      const timeout = setTimeout(() => {
        setText('email');
      }, 1500);

      return () => clearTimeout(timeout);
    }
  };

  return <li onClick={handleClickEmail}>{text}</li>;
}

export default Email;
