const express = require("express");
const cors = require("cors");
// const morgan = require("morgan");
const app = express();
const jwt = require('jsonwebtoken');

// app.use(morgan());
app.use(cors());
app.use(express.json());
app.post('/login',(req,res)=>{
  console.log('hit',req.body);
     let data = {
        time: Date(),
        email:req.body.email,
    };
  
  const token = jwt.sign(data, 'jwtSecretKey');
  return res.status(200).json({token});
});


app.listen(8003,()=>{
  console.log('App is running on 8003');
})