const connectDB = require("./db");
const env = require("./env");

console.log("CONFIG INDEX LOADED:", typeof connectDB, typeof env);

module.exports = {
  connectDB,
  env,
};
