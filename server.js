const app = require('./app')
const{env , connectDB} = require('./src/config')

connectDB()

app.listen(env.PORT , ()=>{
    console.log(`Server is running on ${env.PORT}`);
    
})