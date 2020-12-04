
const gen = require('./genTransaction')

module.exports.pools = (contracts, pool, prefix) =>
  contracts.delegatedSending.callStatic.pools(pool, prefix)

module.exports.getInvited = (contracts, point) =>
  contracts.delegatedSending.callStatic.getInvited(point)

module.exports.invitedBy = (contracts, point) =>
  contracts.delegatedSending.callStatic.invitedBy(point)

module.exports.canSend = (contracts, as, point) =>
  contracts.delegatedSending.callStatic.canSend(as, point)

module.exports.getPool = (contracts, point) =>
  contracts.delegatedSending.callStatic.getPool(point)

module.exports.getPoolStars = (contracts, pool) =>
  contracts.delegatedSending.callStatic.getPoolStars(pool)

module.exports.canReceive = (contracts, recipient) =>
  contracts.delegatedSending.callStatic.canReceive(recipient)

module.exports.setPoolSize = (contracts, _as, _for, _size) =>
  gen.tx(contracts.delegatedSending, 'setPoolSize', _as, _for, _size)

module.exports.sendPoint = (contracts, _as, _point, _to) =>
  gen.tx(contracts.delegatedSending, 'sendPoint', _as, _point, _to)

