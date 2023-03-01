const router = require('express').Router()
const healthCtrl = require('../controllers/health.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.put('/', checkAuth, healthCtrl.setHealth)

module.exports = router
