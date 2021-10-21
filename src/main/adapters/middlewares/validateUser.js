module.exports = (req, res, next) => {
  const user = req.body;
  if (user && user.username && user.email && user.password) {
    next();
    return;
  }
  res.status(400).send('Invalid input');
};
