const Koa = require('koa')
const Router = require('@koa/router')
const bodyParser = require('koa-bodyparser');

const Web3 = require('web3')
const IPFS = require('ipfs-http-client')

const TruffleContract = require('@truffle/contract')
const BirthABI = require('./build/contracts/Birth.json')

const w3 = new Web3('http://localhost:8545')
const ipfs = new IPFS('http://localhost:5001')

const Birth = TruffleContract(BirthABI)
Birth.setProvider(w3.currentProvider)

const app = new Koa()
const router = new Router()

app.use(bodyParser())

router.get('/ipfs', async ctx => {
  ctx.body = await ipfs.getEndpointConfig()
})

router.get('/eth', async ctx => {
  ctx.body = await w3.eth.getNodeInfo()
})

router.post('/register/birth', async ctx => {
  const { name, date } = ctx.request.body

  const options = { from: w3.eth.defaultAccount }
  const birth = await Birth.new(date, name, options)

  const body = {
    address: birth.address,
    name: await birth.name(),
    date: await birth.date(),
    kind: await birth.kind(),
  }

  ctx.body = body
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, async () => {
  const [ account ] = await w3.eth.getAccounts()
  w3.eth.defaultAccount = account
})
