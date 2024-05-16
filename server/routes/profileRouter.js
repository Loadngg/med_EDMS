const Router = require('express')
const router = new Router()
const profileController = require('../controllers/profileController')

router.post('/', profileController.create)
router.get('/', profileController.getAll)

module.exports = router