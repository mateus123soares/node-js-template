const helmet = require('helmet');
const cors = require('cors');
const hpp = require('hpp');

const toobusy = require('./tobysyMiddleware');

const securityMiddleware = [
  function(req, res, next) {
    if (toobusy()) {
      return res.status(503).send('Server Too Busy');
    }

    next();
  },

  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  }),

  hpp(),

  cors({
    origin: process.env.CORS_ORIGINS,
  }),

];

module.exports = securityMiddleware;