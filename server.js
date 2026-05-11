const app = require('./index');
const logger = require('./config/logger');

app.listen(process.env.PORT || 3000, () => {
  logger.info(`Servidor rodando na porta ${process.env.PORT}`);
});