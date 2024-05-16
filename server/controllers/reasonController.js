const { Reason } = require("../models/models");

class ReasonController {
	async create(req, res) {
		const { name, urgency, noWaiting } = req.body;
		const reason = await Reason.create({ name, urgency, noWaiting });
		return res.json(reason);
	}

	async getAll(req, res) {
		const reasons = await Reason.findAll();
		return res.json(reasons);
	}
}

module.exports = new ReasonController();