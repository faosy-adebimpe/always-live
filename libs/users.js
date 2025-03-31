const { read, write } = require("../utils/async-fs");

class Users {
	users = null;
	path = "../always-live/data/users.json";
	constructor() {
		this.load();
	}

	async load() {
		const users = await read(this.path, "utf8");
		this.users = JSON.parse(users);
	}

	async update() {
		await write(this.path, JSON.stringify(this.users), "utf8");
	}

	async add(user, next) {
		try {
			if (!this.users) {
				throw new Error("users not loaded");
			}

			user.id = this.users.length + 1;
			this.users.push(user);
			await this.update();
			return user;
		} catch (error) {
			next(error);
		}
	}

	async get(user, next) {
		try {
			if (!this.users) {
				throw new Error("users not loaded");
			}
			const {email, password} = user;
			const fetchedUser = this.users.find(user => user.email === email && user.password === password);
			return fetchedUser;
		} catch (error) {
			next(error);
		}
	}
}

const users = new Users();

module.exports = users;
