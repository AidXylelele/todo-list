import jwt from 'jsonwebtoken';

type Data = {
  userId: string;
  email: string;
};

export const genenerateToken = (encodeData: Data): string => {
  const token = jwt.sign(encodeData, `jwtSecretToken`, {
    expiresIn: `${38000000}`,
  });
  return `Bearer ${token}`;
};

export const decodeToken = (token: string): any => {
  token = token.replace('Bearer ', '');
  const data = jwt.verify(token, `jwtSecretToken`);
  return data;
};
