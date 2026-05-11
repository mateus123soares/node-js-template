const router = require('express').Router();

const {createUser } = require('../controller/userController');
const {ApiHealth} = require('../controller/healthController')

router.get('/', (req, res) => {
  req.error = {"erro":"5t3e"}
  res.send('Hello World!');
});

router.get('/health',ApiHealth);

router.post('/create',createUser);

module.exports = router;