const router = require('express').Router();

const {createUser, failCreateUser} = require('../controller/userController');

router.get('/', (req, res) => {
  req.error = {"erro":"5t3e"}
  res.send('Hello World!');
});

router.post('/create',createUser);
router.post('/fail',failCreateUser);

module.exports = router;