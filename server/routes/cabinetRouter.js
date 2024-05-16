const Router = require('express')
const router = new Router()
const cabinetController = require('../controllers/cabinetController')

router.post('/', cabinetController.create)
router.get('/', cabinetController.getAll)

module.exports = router