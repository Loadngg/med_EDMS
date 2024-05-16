const Router = require('express')
const router = new Router()
const receptionController = require('../controllers/receptionController')

router.post('/', receptionController.create)
router.get('/', receptionController.getAll)

module.exports = router