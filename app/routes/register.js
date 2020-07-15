const { w3, Birth } = require('../services/eth')

module.exports.birth = async ctx => {
  const { name, date } = ctx.request.body

  const options = { from: w3.eth.defaultAccount }
  const birth = await Birth.new(date, name, options)

  const body = {
    addr: birth.address,
    name: await birth.name(),
    date: await birth.date(),
    kind: await birth.kind(),
  }

  ctx.body = body
}
