const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const accesslog = require('koa-accesslog')

const { router } = require('./routes')

const app =  new Koa()

// Middlewares
app.use(bodyParser())
app.use(accesslog())

// Routes
app.use(router.routes())
app.use(router.allowedMethods())

// Start
app.listen(3000, () => {
  console.log('App started')
})
