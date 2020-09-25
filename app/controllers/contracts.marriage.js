const { w3, Marriage } = require('../services/w3')

const toJson = async marriage => {
  const date = await marriage.date()
  const timestamp = w3.utils.hexToNumber(date)
  return {
    addr: marriage.address,
    date: new Date(timestamp),
    first: await marriage.first(),
    second: await marriage.second()
  }
}

module.exports.postMarriage = async ctx => {
  const { date, first, second } = ctx.request.body
  const options = { from: w3.eth.defaultAccount }
  const marriage = await Marriage.new(date, first, second, options)
  ctx.body = await toJson(marriage)
}

module.exports.getMarriage = async ctx => {
  const { addr } = ctx.params
  const marriage = await Marriage.at(addr)
  ctx.body = await toJson(marriage)
}
