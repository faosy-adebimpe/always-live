// initializing express
const express = require('express');
const app = express();
require('dotenv').config();

// customs
const keepAlive = require('./utils/keep-alive');

// port and other vars
const port = process.env.PORT || 5000;

// routers
app.get('/', (req, res) => {
	res.send('always-live...');
	console.log('site accessed');
});


// start server
app.listen(port, () => console.log(`server running on: http://127.0.0.1:${port}`));


keepAlive();