const { w3 } = require('../services/eth')
const { ipfs } = require('../services/ipfs')

module.exports.ipfs = async ctx => {
  ctx.body = await ipfs.repo.stat()
}

module.exports.eth = async ctx => {
  ctx.body = await w3.eth.getNodeInfo()
}
