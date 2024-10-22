import jwt from 'jsonwebtoken';

export const createToken = (
  id: string,
  tokenType: string,
  expirationPeriod: string
) => {
  const token = jwt.sign(
    {
      id: id,
      tokenType: tokenType,
    },
    process.env.INJISANGJUNG_TOKEN_SECRET_KEY!,
    {
      expiresIn: expirationPeriod,
      issuer: 'injisangjung',
    }
  );

  return token;
};
