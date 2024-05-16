const { Reception } = require("../models/models");

class ReceptionController {
	async create(req, res) {
		const { receptionTimeStart, receptionTimeEnd } = req.body;
		const reception = await Reception.create({ receptionTimeStart, receptionTimeEnd });
		return res.json(reception);
	}

	async getAll(req, res) {
		const receptions = await Reception.findAll();
		return res.json(receptions);
	}
}

module.exports = new ReceptionController();