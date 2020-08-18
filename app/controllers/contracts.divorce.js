const { w3, Divorce } = require('../services/w3')

const toJson = async divorce => {
  return {
    addr: divorce.address,
    date: await divorce.date(),
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
