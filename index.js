require('dotenv').config({ path: '.env' });

const express = require('express');

const security = require('./middlewares/securityMiddleware');
const limiter = require('./middlewares/limiterMiddleware');
const wideEvent = require('./middlewares/wideEventMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');

const routes = require('./routes/index.routes');

const app = express();

app.use(express.json({ limit: '1kb' }));
app.use(express.urlencoded({ extended: true, limit: '1kb' }));

app.use(security);
app.use(limiter);

app.use(wideEvent)
app.use('/',routes);
app.use(errorMiddleware)

module.exports = app;