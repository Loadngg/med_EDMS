const Router = require('express')
const router = new Router()
const reasonController = require('../controllers/reasonController')

router.post('/', reasonController.create)
router.get('/', reasonController.getAll)
router.put('/:id', reasonController.update)
router.delete('/:id', reasonController.delete)

module.exports = router