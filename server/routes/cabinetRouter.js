const Router = require('express')
const router = new Router()
const cabinetController = require('../controllers/cabinetController')

router.post('/', cabinetController.create)
router.get('/', cabinetController.getAll)
router.put('/:id', cabinetController.update)
router.delete('/:id', cabinetController.delete)

module.exports = router