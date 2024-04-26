// add this in scripts/dotenv.js
const result = require("dotenv").config({
	processEnv: {},
	DOTENV_KEY: process.env.DOTENV_KEY,
});
const jsonObject = result.parsed;

const fs = require("fs");

// Example JSON object

// Format key-value pairs
const envData = Object.entries(jsonObject)
	.map(([key, value]) => `${key}=${value}`)
	.join("\n");

// Write to .env file
fs.writeFileSync(".env", envData);
fs.writeFileSync(".env.production", envData);
