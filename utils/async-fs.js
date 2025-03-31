const { readFile, writeFile } = require("fs");
const { promisify } = require("util");

const read = promisify(readFile);
const write = promisify(writeFile);

module.exports = { read, write };
