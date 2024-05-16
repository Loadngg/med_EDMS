const { Profile } = require("../models/models");

class ProfileController {
	async create(req, res) {
		const { name } = req.body;
		const profile = await Profile.create({ name });
		return res.json(profile);
	}

	async getAll(req, res) {
		const profiles = await Profile.findAll();
		return res.json(profiles);
	}

	async update(req, res) {
		const { name } = req.body;
		const { id } = req.params;
		const profile = await Profile.update({ name }, {
			where: { id },
		});
		return res.json(profile);
	}

	async delete(req, res) {
		const { id } = req.params;
		const profile = await Profile.destroy({
			where: { id },
		});
		return res.json(profile);
	}
}

module.exports = new ProfileController();