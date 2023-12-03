//git init
//npm init
//npm i nodemon concurrently -D 
//npm i express cors json-server axios
const express = require('express');
const cors = require('cors');
const router = require('./routes/index')
//create web server
const app = express();

app.use(cors());
app.use('/api',router);

const port = 80;
app.listen(port,function(){
    console.log('Server is runing on http://localhost:80')

})