// initializing express
const express = require("express");
const app = express();
require("dotenv").config();

// customs
const keepAlive = require("./utils/keep-alive");
const authRoute = require("./routes/auth.js");
const notFound = require("./middleware/not-found.js");
const errorHandler = require("./middleware/error-handler.js");
const authenticate = require('./middleware/authenticate.js');

// port and other vars
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());

// routers
app.get("/", (req, res) => {
	res.send("always-live...");
	console.log("site accessed");
});
// auth route
app.use("/auth", authenticate, authRoute);

// not found error
app.use(notFound);

// hanlde unexpected and expected errors;
app.use(errorHandler);

// start server
app.listen(port, () => {
	console.log(`server running on: http://127.0.0.1:${port}`);
	keepAlive();
});
