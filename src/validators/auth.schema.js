//for zod validation

const {z} = require('zod');

const registerSchema = z.object({
    firstname : z.string().min(3),
    lastname : z.string().min(3),
    email : z.string().email().toLowerCase(),
    password:z.string().min(5)
})

const loginSchema = z.object({
    email : z.string().email().toLowerCase(),
    password:z.string().min(5)
})

module.exports = {
    registerSchema :registerSchema,
    loginSchema :loginSchema
}