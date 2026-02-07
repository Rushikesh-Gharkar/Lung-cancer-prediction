const express = require('express')
const {registerUser , userLogin} = require('../controllers/authController')
const {registerSchema , loginSchema} = require('../validators/auth.schema')
const {validate} = require('../middleware/validate')

const router = express.Router()

router.post("/register" , validate(registerSchema) , registerUser)
router.post("/login" , validate(loginSchema) , userLogin)

module.exports = {
    router:router
}