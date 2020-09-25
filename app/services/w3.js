const Web3 = require('web3')
const contract = require('@truffle/contract')

console.log('Connecting to Eth')
const w3 = new Web3('http://localhost:8545')

console.log('Setting default account')
const account = w3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY)
w3.eth.defaultAccount = account.address

console.log('Reading ABIs')
const BirthABI = require('../../build/contracts/Birth.json')
const DeathABI = require('../../build/contracts/Death.json')
const DivorceABI = require('../../build/contracts/Divorce.json')
const MarriageABI = require('../../build/contracts/Marriage.json')
const PersonABI = require('../../build/contracts/Person.json')

console.log('Building contracts')
const Birth = contract(BirthABI)
const Death = contract(DeathABI)
const Divorce = contract(DivorceABI)
const Marriage = contract(MarriageABI)
const Person = contract(PersonABI)

console.log('Setting providers')
Birth.setProvider(w3.currentProvider)
Death.setProvider(w3.currentProvider)
Divorce.setProvider(w3.currentProvider)
Marriage.setProvider(w3.currentProvider)
Person.setProvider(w3.currentProvider)

console.log('Setting number formats')
Birth.numberFormat = 'BigNumber'
Death.numberFormat = 'BigNumber'
Divorce.numberFormat = 'BigNumber'
Marriage.numberFormat = 'BigNumber'
Person.numberFormat = 'BigNumber'

module.exports.w3 = w3
module.exports.Birth = Birth
module.exports.Death = Death
module.exports.Divorce = Divorce
module.exports.Marriage = Marriage
module.exports.Person = Person
