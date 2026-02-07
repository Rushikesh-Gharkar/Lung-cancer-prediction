const express = require('express')
const {registerUser , userLogin} = require('../controllers/authController')
const {registerSchema , loginSchema} = require('../validators/auth.schema')


