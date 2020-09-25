const { w3, Divorce } = require('../services/w3')

const toJson = async divorce => {
  const date = await divorce.date()
  const timestamp = w3.utils.hexToNumber(date)
  return {
    addr: divorce.address,
    date: new Date(timestamp),
    marriage: await divorce.marriage()
  }
}

module.exports.postDivorce = async ctx => {
  const { date, marriage } = ctx.request.body
  const options = { from: w3.eth.defaultAccount }
  const divorce = await Divorce.new(date, marriage, options)
  ctx.body = await toJson(divorce)
}

module.exports.getDivorce = async ctx => {
  const { addr } = ctx.params
  const divorce = await Divorce.at(addr)
  ctx.body = await toJson(divorce)
}
