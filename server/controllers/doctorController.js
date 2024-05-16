const uuid = require("uuid");
const path = require("path");
const { Doctor } = require("../models/models");

class DoctorController {
	async create(req, res) {
		const { fullName, receptionTimeStart, receptionTimeEnd } = req.body;
		const { img } = req.files;
		let fileName = uuid.v4() + ".jpg";
		await img.mv(path.resolve(__dirname, "..", "static", fileName));
		const doctor = await Doctor.create({ fullName, receptionTimeStart, receptionTimeEnd, img: fileName });
		return res.json(doctor);
	}

	async getAll(req, res) {
		const doctors = await Doctor.findAll();
		return res.json(doctors);
	}

	async getOne(req, res) {
		const { id } = req.params;
		const doctor = await Doctor.findOne({
			where: { id },
		});
		return res.json(doctor);
	}

	async update(req, res) {
		const { fullName, receptionTimeStart, receptionTimeEnd } = req.body;
		const { img } = req.files;
		const { id } = req.params;
		let fileName = uuid.v4() + ".jpg";
		await img.mv(path.resolve(__dirname, "..", "static", fileName));
		const doctor = await Doctor.update({ fullName, receptionTimeStart, receptionTimeEnd, img: fileName }, {
			where: { id },
		});
		return res.json(doctor);
	}

	async delete(req, res) {
		const { id } = req.params;
		const doctor = await Doctor.destroy({
			where: { id },
		});
		return res.json(doctor);
	}
}

module.exports = new DoctorController();