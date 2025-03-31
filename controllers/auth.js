const asyncWrapper = require("../middleware/async-wrapper.js");
const empty = require("../utils/empty.js");
const { customError } = require("../errors/custom-error.js");
const users = require('../libs/users.js');

const register = asyncWrapper(async (req, res, next) => {
	const { name, email, password } = req.body;
	if (empty(name) || empty(email) || empty(password)) {
		return next(customError(400, "all field is required."));
	}
	// const user = { name, email, password };

	const user = await users.add({ name, email, password }, next);

	res.status(200).json({ success: true, user });
});

const login = asyncWrapper(async (req, res, next) => {
	const { email, password } = req.body;
	if (empty(email) || empty(password)) {
		return next(customError(400, "all field is required."));
	}

	const user = await users.get({ email, password }, next);
	if (!user) {
		return next(customError(404, 'user not found'));
	}

	res.status(200).json({ success: true, user });
});

module.exports = {
	register,
	login
};
