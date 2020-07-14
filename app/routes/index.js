const Router = require('@koa/router')

const health = require('./health')
const register = require('./register')

const router = new Router()

router.get('/health/ipfs', health.ipfs)
router.get('/health/eth', health.eth)

router.post('/register/birth', register.birth)

module.exports.router = router
