const { w3, Birth } = require('../services/w3')

const toJson = async birth => {
  return {
    addr: birth.address,
    date: await birth.date(),
    name: await birth.name()
  }
}

module.exports.postBirth = async ctx => {
  const { name, date } = ctx.request.body
  const options = { from: w3.eth.defaultAccount }
  const birth = await Birth.new(date, name, options)
  ctx.body = await toJson(birth)
}

module.exports.getBirth = async ctx => {
  const { addr } = ctx.params
  const birth = await Birth.at(addr)
  ctx.body = await toJson(birth)
}
