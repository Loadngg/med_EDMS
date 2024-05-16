const Router = require('express')
const router = new Router()
const reasonController = require('../controllers/reasonController')

router.post('/', reasonController.create)
router.get('/', reasonController.getAll)

module.exports = router