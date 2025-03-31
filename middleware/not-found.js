const notFound = (req, res) =>
	res.status(404).send("error 404: page not found");

module.exports = notFound;
