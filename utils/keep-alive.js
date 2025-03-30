const axios = require('axios');
const keepAlive = async () => {
	try {
		setInterval( async () => {
			await axios.get('https://always-live.onrender.com/');
		}, 500000);
	} catch(error) {
		console.log(`keep alive error: ${error.message}`)
	}
}

module.exports = keepAlive;