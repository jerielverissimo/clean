const validate = require('./middlewares/validateUser');

const UsersController = require('./controllers/UsersController');

module.exports = router => {

  router.post('/usr/add', validate, async (req, res) => {
    const response = await UsersController.createUser(req);
    console.log('response: ', response);
    res.send(response.data);
  });

  return router;
};
