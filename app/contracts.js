const Contract = require('@truffle/contract')

const BirthABI = require('../build/contracts/Birth.json')
module.exports.Birth = Contract(BirthABI)
