const IPFS = require('ipfs-http-client')
const ipfs = new IPFS('http://localhost:5001')
module.exports.ipfs = ipfs
