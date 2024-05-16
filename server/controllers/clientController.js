const { Client, Cabinet, Doctor } = require("../models/models");

class ClientController {
	async create(req, res) {
		const { fullName, birthday, idCard, policy } = req.body;
		const client = await Client.create({ fullName, birthday, idCard, policy });
		return res.json(client);
	}

	async getAll(req, res) {
		const clients = await Client.findAll();
		return res.json(clients);
	}

	async getOne(req, res) {
		const { id } = req.params;
		const client = await Client.findOne(
			{ where: { id } },
		);
		return res.json(client);
	}
}

module.exports = new ClientController();