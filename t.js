const Koa = require('koa')
const Router = require('@koa/router')

const Web3 = require('web3')
const IPFS = require('ipfs-http-client')

const w3 = new Web3('http://localhost:8545')
const ipfs = new IPFS('http://localhost:5001')

const app = new Koa()
const router = new Router()

router.get('/ipfs', async ctx => {
  const config = await ipfs.getEndpointConfig()
  ctx.body = new Boolean(config)
})

router.get('/eth', async ctx => {
  ctx.body = await w3.eth.net.isListening()
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
