const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const userRouter = require('./routes/User.router');
const connectDB=require('./config/db');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));    
app.use(express.static('public'));

app.use('/user',userRouter);


app.listen(process.env.PORT,()=>{
    connectDB()
    console.log('Server is running on port 5000');
})
