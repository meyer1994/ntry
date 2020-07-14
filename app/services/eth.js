const Web3 = require('web3')
const Contract = require('@truffle/contract')

const w3 = new Web3('http://localhost:8545')

const BirthABI = require('../../build/contracts/Birth.json')
const Birth = Contract(BirthABI)
Birth.setProvider(w3.currentProvider)

module.exports.w3 = w3
module.exports.Birth = Birth
