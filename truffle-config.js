module.exports = {

  networks: {
    development: {
      gas: 6721975,
      host: '127.0.0.1',
      port: 8545,
      network_id: '*'
    }
  },

  mocha: {
    timeout: 100000
  },

  compilers: {
    solc: {
      version: '0.7.1',
      docker: true,
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: 'istanbul'
      }
    }
  }
}
