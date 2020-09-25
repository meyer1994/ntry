const Koa = require('koa')
const dotenv = require('dotenv')

const logger = require('koa-logger')
const error = require('koa-json-error')
const bodyParser = require('koa-bodyparser')
const responseTime = require('koa-response-time')

const app = new Koa()
dotenv.config()

// Middlewares
app.use(bodyParser())
app.use(logger())
app.use(error())
app.use(responseTime())

// Routes
const { router } = require('./routes')
app.use(router.routes())
app.use(router.allowedMethods())

// Start
app.listen(3000, () => {
  console.log('App started')
})
