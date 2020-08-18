const { w3, Person } = require('../services/w3')

const toJson = async person => {
  return {
    addr: person.address,
    birth: await person.birth(),
    death: await person.death(),
    divorces: await person.divorces(),
    marriages: await person.marriages()
  }
}

module.exports.postPerson = async ctx => {
  const options = { from: w3.eth.defaultAccount }
  const person = await Person.new(options)
  ctx.body = await toJson(person)
}

module.exports.getPerson = async ctx => {
  const person = await Person.at(ctx.params.addr)
  ctx.body = await toJson(person)
}

module.exports.postBirth = async ctx => {
  const { birth } = ctx.request.body
  const person = await Person.at(ctx.params.addr)
  const options = { from: w3.eth.defaultAccount }
  await person.setBirth(birth, options)
  ctx.body = await toJson(person)
}

module.exports.postDeath = async ctx => {
  const { death } = ctx.request.body
  const person = await Person.at(ctx.params.addr)
  const options = { from: w3.eth.defaultAccount }
  await person.setDeath(death, options)
  ctx.body = await toJson(person)
}

module.exports.postMarriage = async ctx => {
  const { marriage } = ctx.request.body
  const person = await Person.at(ctx.params.addr)
  const options = { from: w3.eth.defaultAccount }
  await person.addMarriage(marriage, options)
  ctx.body = await toJson(person)
}

module.exports.postDivorce = async ctx => {
  const { divorce } = ctx.request.body
  const person = await Person.at(ctx.params.addr)
  const options = { from: w3.eth.defaultAccount }
  await person.addDivorce(divorce, options)
  ctx.body = await toJson(person)
}
