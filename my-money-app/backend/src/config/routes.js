const express = require('express')
const auth = require('./auth')

module.exports = function(server) {

    /*
    * Rotas protegidas por Token JWT
    */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(protectedApi, '/billingCycles')


    /*
    * Rotas abertas
    */
    const openApi = express.Router()
    server.use('/opai', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/singup', AuthService.singup)
    openApi.post('/validateToken', AuthService.validateToken)
    
}