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

	async update(req, res) {
		const { receptionTimeStart, receptionTimeEnd } = req.body;
		const { id } = req.params;
		const reception = await Reception.update({ receptionTimeStart, receptionTimeEnd }, {
			where: { id },
		});
		return res.json(reception);
	}

	async delete(req, res) {
		const { id } = req.params;
		const reception = await Reception.destroy({
			where: { id }
		});
		return res.json(reception);
	}
}

module.exports = new ReceptionController();