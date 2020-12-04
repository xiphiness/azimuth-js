
const gen = require('./genTransaction')

module.exports.getCommitment = (contracts, address) =>
  contracts.conditionalSR.callStatic.commitments(address)

module.exports.getRemainingStars = (contracts, address) =>
  contracts.conditionalSR.callStatic.getRemainingStars(address)

module.exports.getBatches = (contracts, address) =>
  contracts.conditionalSR.callStatic.getBatches(address)

module.exports.verifyBalance = (contracts, address) =>
  contracts.conditionalSR.callStatic.verifyBalance(address)

module.exports.getWithdrawLimit = (contracts, address, _batch) =>
  contracts.conditionalSR.callStatic.withdrawLimit(address, _batch)

module.exports.getApprovedTransfer = (contracts, address) =>
  contracts.conditionalSR.callStatic.transfers(address)

module.exports.getConditionsState = (contracts) =>
  contracts.conditionalSR.callStatic.getConditionsState()

module.exports.getWithdrawn = (contracts, address) =>
  contracts.conditionalSR.callStatic.getWithdrawn(address);

module.exports.getForfeited = (contracts, address) =>
  contracts.conditionalSR.callStatic.getForfeited(address)

module.exports.approveCommitmentTransfer = (contracts, _to) =>
  gen.tx(contracts.conditionalSR, 'approveCommitmentTransfer', _to)

module.exports.transferCommitment = (contracts, _from) =>
  gen.tx(contracts.conditionalSR, 'transferCommitment', _from)

module.exports.withdraw = (contracts, _batch) =>
  gen.tx(contracts.conditionalSR, 'withdrawToSelf', _batch)

module.exports.withdrawTo = (contracts, _batch, _to) =>
  gen.tx(contracts.conditionalSR, 'withdraw', _batch, _to)

module.exports.forfeit = (contracts, _batch) =>
  gen.tx(contracts.conditionalSR, 'forfeit', _batch)

module.exports.analyzeCondition = (contracts, _condition) =>
  gen.tx(contracts.conditionalSR, 'analyzeCondition', _condition)

