const useCertify = () => {
  const handleCertify = async (id: string, password: string) => {
    const response = await fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        password: password,
      }),
    });
    const { accessToken } = await response.json();

    sessionStorage.setItem('accessToken', accessToken);
    sessionStorage.setItem('isAdmin', 'true');
  };

  const checkIsAdmin = () => {
    const isAdmin = sessionStorage.getItem('isAdmin') === 'true';
    return isAdmin;
  };

  return { handleCertify, checkIsAdmin };
};

export default useCertify;
