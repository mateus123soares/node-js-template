function errorMiddleware(error, req, res, next) {

    req.error = error;
    res.status(500).json({
        success: false,
        message: "Erro interno"
    });
}

module.exports = errorMiddleware;