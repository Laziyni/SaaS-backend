const jsonwebtoken = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Вы не авторизованы" });
  }

  const [type, token] = authorization.split(" ");

  if (type !== "Bearer") {
    return res.status(401).json({ error: "Неверный тип токена" });
  }

  try {
    const { role } = jsonwebtoken.verify(token, process.env.SECRET_JWT_KEY);
    if (role !== "USER") {
      return res.status(401).json({ error: "у вас нет доступа" });
    }
    next();
  } catch (error) {
    res.status(401).json({ error: "ошибка авторизации " + error });
  }
};
