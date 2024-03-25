require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

const start = async () => {
	try {
		app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
	} catch (e) {
		console.log(e);
	}
};

start().then(() => null);
