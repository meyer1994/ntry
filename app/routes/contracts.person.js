const { w3, Birth, Death, Divorce, Marriage, Person } = require('../services/w3')

const toJson = async person => {
  return {
    addr: person.address,
    birth: await person.birth(),
    death: await person.death(),
    divorces: await person.divorces(),
    marriages: await person.marriages(),
  }
}

module.exports.postPerson = async ctx => {
  const options = { from: w3.eth.defaultAccount }
  const person = await Person.new(options)
  ctx.body = await toJson(person)
}

module.exports.getPerson = async ctx => {
  const { addr } = ctx.params
  const person = await Person.at(addr)
  ctx.body = await toJson(person)
}

module.exports.postBirth = async ctx => {
  const { addr } = ctx.params
  const { birth } = ctx.request.body

  await Birth.at(birth)
  const person = await Person.at(addr)
  await person.setBirth(birth.birth)

  ctx.body = await toJson(person)
}

module.exports.postDeath = async ctx => {
  const { addr } = ctx.params
  const { death } = ctx.request.body

  await Death.at(death)
  const person = await Person.at(addr)
  await person.setDeath(death)

  ctx.body = await toJson(person)
}

module.exports.postMarriage = async ctx => {
  const { addr } = ctx.params
  const { marriage } = ctx.request.body

  await Marriage.at(marriage)
  const person = await Person.at(addr)
  await person.addMarriage(marriage)

  ctx.body = await toJson(person)
}

module.exports.postDivorce = async ctx => {
  const { addr } = ctx.params
  const { divorce } = ctx.request.body

  await Divorce.at(divorce)
  const person = await Person.at(addr)
  await person.addDivorce(divorce)

  ctx.body = await toJson(person)
}
