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
}

module.exports = new ProfileController();