const Koa = require('koa')
const Router = require('@koa/router')
const bodyParser = require('koa-bodyparser');

const health = require('./routes/health')
const register = require('./routes/register')

const app =  new Koa()
const router = new Router()

app.use(bodyParser())

router.get('/health/ipfs', health.ipfs)
router.get('/health/eth', health.eth)

router.post('/register/birth', register.newBirth)

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
