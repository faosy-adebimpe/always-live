// initializing express
const express = require('express');
const app = express();

const axios = require('axios');

require('dotenv').config();

// port and other vars
const port = process.env.PORT || 5000;

// routers
app.get('/', (req, res) => {
	res.send('always-live...');
	console.log('site accessed');
});


// start server
app.listen(port, () => console.log(`server running on: http://127.0.0.1:${port}`));


const keepAlive = async () => {
	try {
		setInterval( async () => {
			const response = await axios.get('https://always-live.onrender.com/');
			console.log(response.data);
		}, 500000);
	} catch(error) {
		console.log(`keep alive error: ${error.message}`)
	}
}

keepAlive();