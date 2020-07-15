const { w3, Death } = require('../services/eth')

module.exports.postDeath = async ctx => {
  const { date, birth } = ctx.request.body

  const options = { from: w3.eth.defaultAccount }
  const death = await Death.new(date, birth, options)

  ctx.body = {
    addr: death.address,
    date: await death.date(),
    birth: await death.birth(),
  }
}

module.exports.getDeath = async ctx => {
  const { addr } = ctx.params

  const death = await Death.at(addr)

  ctx.body = {
    addr: death.address,
    date: await death.date(),
    birth: await death.birth(),
  }
}
