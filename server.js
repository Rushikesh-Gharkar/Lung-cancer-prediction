const app = require("./src/app");
const { connectDB, env } = require("./src/config");

connectDB();

app.listen(env.PORT, () => {
  console.log(`Server is running on ${env.PORT}`);
});
