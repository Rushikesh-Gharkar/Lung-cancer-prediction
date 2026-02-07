
require('dotenv').config()

const env = {
    PORT : process.env.PORT,
    MONGO_URI : process.env.MONGO_URI,
    JWT_SECRET : process.env.JWT_SECRET
}

module.exports = {
    env:env
}