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

	async update(req, res) {
		const { floor, number } = req.body;
		const { id } = req.params;
		const cabinet = await Cabinet.update({ floor, number }, {
			where: { id },
		});
		return res.json(cabinet);
	}

	async delete(req, res) {
		const { id } = req.params;
		const cabinet = await Cabinet.destroy({
			where: { id },
		});
		return res.json(cabinet);
	}
}

module.exports = new CabinetController();