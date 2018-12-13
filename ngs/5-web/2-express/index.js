const express = require('express');

const server = express();

server.get('/',(req,res) => {res.send('Hello express')})

server.get('/about',(req,res) => {res.send('about')})

server.get('/*',(req,res) => {res.send('hi')})

server.listen(4242, () => {
  console.log('Express Server is running...');
});
