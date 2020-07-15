const IPFS = require('ipfs-http-client')

console.log('Connecting to IPFS')
const ipfs = new IPFS('http://localhost:5001')

module.exports.ipfs = ipfs
