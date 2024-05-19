const Router = require('express')
const router = new Router()
const receptionController = require('../controllers/receptionController')

router.post('/', receptionController.create)
router.get('/', receptionController.getAll)
router.put('/:id', receptionController.update)
router.delete('/:id', receptionController.delete)

module.exports = router
