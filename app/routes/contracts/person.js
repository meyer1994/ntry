const { w3 } = require('../services/eth')

module.exports.newPerson = async ctx => {

}

module.exports.addBirth = async ctx => {

}

module.exports.addMarriage = async ctx => {

}

module.exports.addDivorce = async ctx => {

}

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
