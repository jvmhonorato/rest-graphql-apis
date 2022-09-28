const express = require('express')
const router =  express.Router()
const authController = require('../controllers/authController')

//add dados
router.post('/login', authController.auth)


module.exports = router