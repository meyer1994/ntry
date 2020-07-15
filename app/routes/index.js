const Router = require('@koa/router')

const health = require('./health')

const birth = require('./contracts/birth')

const router = new Router()

router.get('/health/ipfs', health.getIpfs)
router.get('/health/eth', health.getEth)

router.post('/docs/births', birth.postBirth)
router.get('/docs/births/:addr', birth.getBirth)

module.exports.router = router
