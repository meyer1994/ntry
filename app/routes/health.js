const { w3 } = require('../services/w3')
const { ipfs } = require('../services/ipfs')

module.exports.getIpfs = async ctx => {
  ctx.body = await ipfs.repo.stat()
}

module.exports.getEth = async ctx => {
  ctx.body = await w3.eth.getNodeInfo()
}
