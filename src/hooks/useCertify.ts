import { useEffect, useState } from 'react';

const useCertify = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const adminStatus = sessionStorage.getItem('isAdmin') === 'true';
      setIsAdmin(adminStatus);
    }
  }, []);

  const handleCertify = async (id: string, password: string) => {
    const response = await fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        password: password,
      }),
    });

    const status = response.status;

    if (status === 200) {
      const { accessToken } = await response.json();
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('isAdmin', 'true');
        setIsAdmin(true);
      }

      return { isValid: true };
    }

    return { isValid: false };
  };

  return { handleCertify, isAdmin };
};

export default useCertify;
