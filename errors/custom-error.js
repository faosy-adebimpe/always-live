class CustomError extends Error {
	constructor(statusCode, message) {
		super(message);
		this.statusCode = statusCode
	}
}

const customError = (statusCode, message) => new CustomError(statusCode, message);

module.exports = {
	CustomError,
	customError
}