const Koa = require('koa')

const accesslog = require('koa-accesslog')
const bodyParser = require('koa-bodyparser')
const error = require('koa-json-error')
const responseTime = require('koa-response-time');

const { router } = require('./routes')

const app =  new Koa()

// Middlewares
app.use(bodyParser())
app.use(accesslog())
app.use(error())
app.use(responseTime())

// Routes
app.use(router.routes())
app.use(router.allowedMethods())

// Start
app.listen(3000, () => {
  console.log('App started')
})
