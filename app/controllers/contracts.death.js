const { w3, Death } = require('../services/w3')

const toJson = async death => {
  return {
    addr: death.address,
    date: await death.date(),
    birth: await death.birth()
  }
}

module.exports.postDeath = async ctx => {
  const { date, birth } = ctx.request.body
  const options = { from: w3.eth.defaultAccount }
  const death = await Death.new(date, birth, options)
  ctx.body = await toJson(death)
}

module.exports.getDeath = async ctx => {
  const { addr } = ctx.params
  const death = await Death.at(addr)
  ctx.body = await toJson(death)
}
