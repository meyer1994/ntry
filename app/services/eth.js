const Web3 = require('web3')
const Contract = require('@truffle/contract')

const w3 = new Web3('http://localhost:8545')
module.exports.w3 = w3

const BirthABI = require('../../build/contracts/Birth.json')
const Birth = Contract(BirthABI)
Birth.setProvider(w3.currentProvider)
module.exports.Birth = Birth

const DeathABI = require('../../build/contracts/Death.json')
const Death = Contract(DeathABI)
Death.setProvider(w3.currentProvider)
module.exports.Death = Death

const MarriageABI = require('../../build/contracts/Marriage.json')
const Marriage = Contract(MarriageABI)
Marriage.setProvider(w3.currentProvider)
module.exports.Marriage = Marriage


w3.eth.getAccounts().then(([ acc ]) => {
  console.log('Setting default account to:', acc)
  w3.eth.defaultAccount = acc
})

