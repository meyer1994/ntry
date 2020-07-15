const { w3, Marriage } = require('../../services/eth')

module.exports.postMarriage = async ctx => {
  const { date, first, second } = ctx.request.body

  const options = { from: w3.eth.defaultAccount }
  const marriage = await Marriage.new(date, first, second, options)

  ctx.body = {
    addr: marriage.address,
    date: await marriage.date(),
    first: await marriage.first(),
    second: await marriage.second(),
  }
}

module.exports.getDivorce = async ctx => {
  const { addr } = ctx.params

  const marriage = await Marriage.at(addr)

  ctx.body = {
    addr: marriage.address,
    date: await marriage.date(),
    first: await marriage.first(),
    second: await marriage.second(),
  }
}
