const logger = require("../config/logger");

async function createUser(request, response, next) {

    try {
        const body = {
            name: request.body.name,
            age: request.body.age
        };

        request.wideEvent.controller = "Create User"
        request.wideEvent.user = {
            name: request.body.name 
        };

        response.status(201).json({
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

async function failCreateUser(request, response, next) {

    try {
        const body = {
            name: request.body.name,
            age: request.body.age
        };
        
        throw new Error("Erro Interno");
        
        response.status(500).json({
            success: false,
            message: "Fail to create a new user"
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
    createUser,
    failCreateUser
};