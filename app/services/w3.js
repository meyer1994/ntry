const Web3 = require('web3')
const Contract = require('@truffle/contract')

console.log('Connecting to Eth')
const w3 = new Web3('http://localhost:8545')

w3.eth.getAccounts().then(([ acc ]) => {
  console.log('Setting default account to:', acc)
  w3.eth.defaultAccount = acc
})

console.log('Reading ABI')
const BirthABI = require('../../build/contracts/Birth.json')
const DeathABI = require('../../build/contracts/Death.json')
const DivorceABI = require('../../build/contracts/Divorce.json')
const MarriageABI = require('../../build/contracts/Marriage.json')
const PersonABI = require('../../build/contracts/Person.json')

console.log('Building contracts')
const Birth = Contract(BirthABI)
const Death = Contract(DeathABI)
const Divorce = Contract(DivorceABI)
const Marriage = Contract(MarriageABI)
const Person = Contract(PersonABI)

console.log('Setting providers')
Birth.setProvider(w3.currentProvider)
Death.setProvider(w3.currentProvider)
Divorce.setProvider(w3.currentProvider)
Marriage.setProvider(w3.currentProvider)
Person.setProvider(w3.currentProvider)

module.exports.w3 = w3

module.exports.Birth = Birth
module.exports.Death = Death
module.exports.Divorce = Divorce
module.exports.Marriage = Marriage
module.exports.Person = Person
