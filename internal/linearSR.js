
const gen = require('./genTransaction')

module.exports.getBatch = (contracts, address) =>
  contracts.linearSR.callStatic.batches(address)

module.exports.getRemainingStars = (contracts, address) =>
  contracts.linearSR.callStatic.getRemainingStars(address)

module.exports.verifyBalance = (contracts, address) =>
  contracts.linearSR.callStatic.verifyBalance(address)

module.exports.getStartTime = (contracts) =>
  contracts.linearSR.callStatic.start()

module.exports.getWithdrawLimit = (contracts, address) =>
  contracts.linearSR.callStatic.withdrawLimit(address)

module.exports.getApprovedTransfer = (contracts, address) =>
  contracts.linearSR.callStatic.transfers(address)

module.exports.approveBatchTransfer = (contracts, _to) =>
  gen.tx(contracts.linearSR, 'approveBatchTransfer', _to)

module.exports.transferBatch = (contracts, _from) =>
  gen.tx(contracts.linearSR, 'transferBatch', _from)

module.exports.withdraw = (contracts) =>
  gen.tx(contracts.linearSR, 'withdraw')

module.exports.withdrawTo = (contracts, _to) =>
  gen.tx(contracts.linearSR, 'withdraw', _to)

