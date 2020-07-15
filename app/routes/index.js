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

router.post('/docs/divorces', divorce.postDivorce)
router.get('/docs/divorces/:addr', divorce.getDivorce)

router.post('/docs/marriages', marriage.postMarriage)
router.get('/docs/marriages/:addr', marriage.getMarriage)

module.exports.router = router
