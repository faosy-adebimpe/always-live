const authenticate = async (req, res, next) => {
	const {authorization} = req.headers;
	console.log(authorization);
	next();
}

module.exports = authenticate;