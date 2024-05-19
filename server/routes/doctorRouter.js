const Router = require('express')
const router = new Router()
const doctorController = require('../controllers/doctorController')

router.post('/', doctorController.create)
router.get('/', doctorController.getAll)
router.get('/:id', doctorController.getOne)
router.put('/:id', doctorController.update)
router.delete('/:id', doctorController.delete)

module.exports = router
