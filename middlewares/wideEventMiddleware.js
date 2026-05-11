const logger = require('../config/logger');
const crypto = require('crypto');

function wideEventMiddleware(req, res, next) {
    const startTime = Date.now();

    const event = {
      timestamp: new Date().toISOString(),
      request_id: crypto.randomUUID(),
      method: req.method,
      path: req.path,
    };

    req.wideEvent = event;

    res.on('finish', () => {

        if (req.error){
            event.status_code = 500;
            event.sucess = false;

            event.error = {
                error: req.error.error,
                controller: req.error.controller,
                message: req.error.message
            };            
        }
        else {
            event.status_code = res.statusCode;
            event.sucess = true
        }
        
        event.duration_ms = Date.now() - startTime;
        logger.info(event);
    });

    next();
};

module.exports =wideEventMiddleware