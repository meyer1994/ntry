const Router = require('@koa/router')

const health = require('./health')

const birth = require('./contracts.birth')
const death = require('./contracts.death')
const divorce = require('./contracts.divorce')
const marriage = require('./contracts.marriage')

const router = new Router()

router.get('/health/eth', health.getEth)
router.get('/health/ipfs', health.getIpfs)

router.post('/docs/births', birth.postBirth)
router.get('/docs/births/:addr', birth.getBirth)

router.post('/docs/deaths', death.postDeath)
router.get('/docs/deaths/:addr', death.getDeath)

router.post('/docs/divorces', divorces.postDivorces)
router.get('/docs/divorces/:addr', divorces.getDivorces)

router.post('/docs/marriages', marriages.postMarriages)
router.get('/docs/marriages/:addr', marriages.getMarriages)

module.exports.router = router
