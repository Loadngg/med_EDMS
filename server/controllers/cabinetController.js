const { Cabinet } = require("../models/models");

class CabinetController {
	async create(req, res) {
		const { floor, number } = req.body;
		const cabinet = await Cabinet.create({ floor, number });
		return res.json(cabinet);
	}

	async getAll(req, res) {
		const cabinets = await Cabinet.findAll();
		return res.json(cabinets);
	}
}

module.exports = new CabinetController();