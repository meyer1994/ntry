const Koa = require('koa')
const Router = require('@koa/router')

const Web3 = require('web3')
const IPFS = require('ipfs-http-client')

const TruffleContract = require('@truffle/contract')
const SumABI = require('./build/contracts/Sum.json')

const w3 = new Web3('http://localhost:8545')
const ipfs = new IPFS('http://localhost:5001')

const Sum = TruffleContract(SumABI)
Sum.setProvider(w3.currentProvider)

const app = new Koa()
const router = new Router()


router.get('/ipfs', async ctx => {
  ctx.body = await ipfs.getEndpointConfig()
})

router.get('/eth', async ctx => {
  ctx.body = await w3.eth.getNodeInfo()
})

router.get('/sum', async ctx => {
  const instance = await Sum.deployed()
  ctx.body = await instance.sum(1, 2)
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
