
module.exports.owner = (contracts) =>
  contracts.azimuth.callStatic.owner()

module.exports.getPoint = (contracts, point) =>
  contracts.azimuth.callStatic.points(point)

module.exports.getRights = (contracts, point) =>
  contracts.azimuth.callStatic.rights(point)

module.exports.getOwnedPoints = (contracts, address) =>
  contracts.azimuth.callStatic.getOwnedPoints(address)

module.exports.getOwnedPointCount = (contracts, address) =>
  contracts.azimuth.callStatic.getOwnedPointCount(address)

module.exports.getOwnedPointAtIndex = (contracts, address, idx) =>
  contracts.azimuth.callStatic.getOwnedPointAtIndex(address, idx)

module.exports.isOwner = (contracts, point, address) =>
  contracts.azimuth.callStatic.isOwner(point, address)

module.exports.getOwner = (contracts, point) =>
  contracts.azimuth.callStatic.getOwner(point)

module.exports.isManagementProxy = (contracts, owner, manager) =>
  contracts.azimuth.callStatic.isManagementProxy(owner, manager)

module.exports.canManage = (contracts, point, address) =>
  contracts.azimuth.callStatic.canManage(point, address)

module.exports.getManagerForCount = (contracts, address) =>
  contracts.azimuth.callStatic.getManagerForCount(address)

module.exports.getManagerFor = (contracts, address) =>
  contracts.azimuth.callStatic.getManagerFor(address)

module.exports.isVotingProxy = (contracts, owner, delegate) =>
  contracts.azimuth.callStatic.isVotingProxy(owner, delegate)

module.exports.canVoteAs = (contracts, point, address) =>
  contracts.azimuth.callStatic.canVoteAs(point, address)

module.exports.getVotingForCount = (contracts, address) =>
  contracts.azimuth.callStatic.getVotingForCount(address)

module.exports.getVotingFor = (contracts, address) =>
  contracts.azimuth.callStatic.getVotingFor(address)

module.exports.isActive = (contracts, point) =>
  contracts.azimuth.callStatic.isActive(point)

module.exports.getKeys = (contracts, point) =>
  contracts.azimuth.callStatic.getKeys(point)

module.exports.getKeyRevisionNumber = (contracts, point) =>
  contracts.azimuth.callStatic.getKeyRevisionNumber(point)

module.exports.hasBeenLinked = (contracts, point) =>
  contracts.azimuth.callStatic.hasBeenLinked(point)

module.exports.isLive = (contracts, point) =>
  contracts.azimuth.callStatic.isLive(point)

module.exports.getContinuityNumber = (contracts, point) =>
  contracts.azimuth.callStatic.getContinuityNumber(point)

module.exports.getSpawnCount = (contracts, point) =>
  contracts.azimuth.callStatic.getSpawnCount(point)

module.exports.getSpawned = (contracts, point) =>
  contracts.azimuth.callStatic.getSpawned(point)

module.exports.getSponsor = (contracts, point) =>
  contracts.azimuth.callStatic.getSponsor(point)

module.exports.getSponsoring = (contracts, point) =>
  contracts.azimuth.callStatic.getSponsoring(point)

module.exports.getSponsoringCount = (contracts, point) =>
  contracts.azimuth.callStatic.getSponsoringCount(point)

module.exports.hasSponsor = (contracts, point) =>
  contracts.azimuth.callStatic.hasSponsor(point)

module.exports.isSponsor = (contracts, point, sponsor) =>
  contracts.azimuth.callStatic.isSponsor(point, sponsor)

module.exports.isEscaping = (contracts, point) =>
  contracts.azimuth.callStatic.isEscaping(point)

module.exports.getEscapeRequest = (contracts, point) =>
  contracts.azimuth.callStatic.getEscapeRequest(point)

module.exports.getEscapeRequests = (contracts, point) =>
  contracts.azimuth.callStatic.getEscapeRequests(point)

module.exports.getEscapeRequestsCount = (contracts, point) =>
  contracts.azimuth.callStatic.getEscapeRequestsCount(point)

module.exports.isRequestingEscapeTo = (contracts, point, sponsor) =>
  contracts.azimuth.callStatic.isRequestingEscapeTo(point, sponsor)

module.exports.isSpawnProxy = (contracts, point, address) =>
  contracts.azimuth.callStatic.isSpawnProxy(point, address)

module.exports.getSpawnProxy = (contracts, point) =>
  contracts.azimuth.callStatic.getSpawnProxy(point)

module.exports.getSpawningForCount = (contracts, address) =>
  contracts.azimuth.callStatic.getSpawningForCount(address)

module.exports.getSpawningFor = (contracts, address) =>
  contracts.azimuth.callStatic.getSpawningFor(address)

module.exports.isTransferProxy = (contracts, point, address) =>
  contracts.azimuth.callStatic.isTransferProxy(point, address)

module.exports.getTransferProxy = (contracts, point) =>
  contracts.azimuth.callStatic.getTransferProxy(point)

module.exports.getTransferringForCount = (contracts, address) =>
  contracts.azimuth.callStatic.getTransferringForCount(address)

module.exports.getTransferringFor = (contracts, address) =>
  contracts.azimuth.callStatic.getTransferringFor(address)

module.exports.isOperator = (contracts, owner, operator) =>
  contracts.azimuth.callStatic.isOperator(owner, operator)
