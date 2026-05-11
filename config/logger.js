const pino = require('pino');

const transport = pino.transport({
  target: 'pino/file',
  options: {
    destination: './logs/app.log',
    mkdir: true
  }
});

const logger = pino(
  {
    level: 'info',
    base: undefined,
    timestamp: false,
  },
  transport
);
module.exports = logger;