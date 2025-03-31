const axios = require('axios');
const keepAlive = async () => {
	try {
		setInterval( async () => {
			await axios.get('https://always-live.onrender.com/');
			// await axios.get(' http://127.0.0.1:5000');
			console.log('hello');
		}, 500000);
	} catch(error) {
		console.log(`keep alive error: ${error.message}`);
	}
}

module.exports = keepAlive;