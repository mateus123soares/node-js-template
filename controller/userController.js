const logger = require("../config/logger");

async function createUser(req, res, next) {

    try {
        const body = {
            name: req.body.name,
            age: req.body.age
        };

        req.wideEvent.controller = "Create User"
        req.wideEvent.user = {
            name: req.body.name 
        };

        res.status(201).json({
            success: true,
            message: "Usuário criado com sucesso"
        });

    } catch (error) {
        next({
            error: "Fail to create a new user",
            type: "Users",
            message: "Erro"
        })
    }
}

module.exports = {
    createUser
};