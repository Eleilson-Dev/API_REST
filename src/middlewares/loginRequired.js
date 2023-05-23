import Jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = Jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    req.userID = id;
    req.userEmail = email;

    next();
  } catch (err) {
    return res.status(401).json({
      errors: ['Token expirado ou invalido'],
    });
  }
};
