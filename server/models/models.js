const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Cabinet = sequelize.define('cabinet', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	floor: { type: DataTypes.INTEGER },
	number: { type: DataTypes.INTEGER, allowNull: false },
})

const Profile = sequelize.define('profile', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Doctor = sequelize.define('doctor', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	fullName: { type: DataTypes.STRING, allowNull: false },
	receptionTimeStart: { type: DataTypes.TIME, allowNull: false },
	receptionTimeEnd: { type: DataTypes.TIME, allowNull: false },
	img: { type: DataTypes.STRING },
})

const Client = sequelize.define('client', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	fullName: { type: DataTypes.STRING, allowNull: false },
	birthday: { type: DataTypes.DATEONLY, allowNull: false },
	idCard: { type: DataTypes.STRING, allowNull: false },
	policy: { type: DataTypes.STRING, allowNull: false },
})

const Reason = sequelize.define('reason', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
	urgency: { type: DataTypes.FLOAT, allowNull: false },
	noWaiting: { type: DataTypes.BOOLEAN, defaultValue: false },
})

const Reception = sequelize.define('reception', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	receptionTimeStart: { type: DataTypes.TIME, allowNull: false },
	receptionTimeEnd: { type: DataTypes.TIME, allowNull: false },
})

Cabinet.hasMany(Doctor)
Doctor.belongsTo(Cabinet)

Profile.hasMany(Doctor)
Doctor.belongsTo(Profile)

Doctor.hasMany(Reception)
Reception.belongsTo(Doctor)

Client.hasMany(Reception)
Reception.belongsTo(Client)

Reason.hasMany(Reception)
Reception.belongsTo(Reason)

module.exports = {
	Cabinet,
	Profile,
	Doctor,
	Client,
	Reason,
	Reception,
}
