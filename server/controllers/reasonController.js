const { Reason } = require('../models/models')

class ReasonController {
	async create(req, res) {
		const { name, urgency, noWaiting } = req.body
		const reason = await Reason.create({ name, urgency, noWaiting })
		return res.json(reason)
	}

	async getAll(req, res) {
		const reasons = await Reason.findAll()
		return res.json(reasons)
	}

	async update(req, res) {
		const { name, urgency, noWaiting } = req.body
		const { id } = req.params
		const reason = await Reason.update(
			{ name, urgency, noWaiting },
			{
				where: { id },
			}
		)
		return res.json(reason)
	}

	async delete(req, res) {
		const { id } = req.params
		const reason = await Reason.destroy({
			where: { id },
		})
		return res.json(reason)
	}
}

module.exports = new ReasonController()
