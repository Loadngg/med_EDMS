const Router = require("express");
const router = new Router()
const cabinetRouter = require('./cabinetRouter')
const clientRouter = require('./clientRouter')
const doctorRouter = require('./doctorRouter')
const profileRouter = require('./profileRouter')
const reasonRouter = require('./reasonRouter')
const receptionRouter = require('./receptionRouter')

router.use('/cabinet', cabinetRouter)
router.use('/client', clientRouter)
router.use('/doctor', doctorRouter)
router.use('/profile', profileRouter)
router.use('/reason', reasonRouter)
router.use('/reception', receptionRouter)

module.exports  = router