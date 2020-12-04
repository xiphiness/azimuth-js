
module.exports.getPollDuration = (contracts) =>
  contracts.polls.callStatic.pollDuration()

module.exports.getPollCooldown = (contracts) =>
  contracts.polls.callStatic.pollCooldown()

module.exports.getTotalVoters = (contracts) =>
  contracts.polls.callStatic.totalVoters()

module.exports.getDocumentProposals = (contracts) =>
  contracts.polls.callStatic.getDocumentProposals()

module.exports.getUpgradeProposals = (contracts) =>
  contracts.polls.callStatic.getUpgradeProposals()

module.exports.getDocumentMajorities = (contracts) =>
  contracts.polls.callStatic.getDocumentMajorities()

module.exports.getUpgradePoll = (contracts, proposal) =>
  contracts.polls.callStatic.upgradePolls(proposal)

module.exports.getDocumentPoll = (contracts, proposal) =>
  contracts.polls.callStatic.documentPolls(proposal)

module.exports.eclipticHasAchievedMajority = (contracts, proposal) =>
  contracts.polls.callStatic.eclipticHasAchievedMajority(proposal)

module.exports.documentHasAchievedMajority = (contracts, proposal) =>
  contracts.polls.callStatic.documentHasAchievedMajority(proposal)

module.exports.hasVotedOnUpgradePoll = (contracts, galaxy, proposal) =>
  contracts.polls.callStatic.hasVotedOnUpgradePoll(galaxy, proposal)

module.exports.hasVotedOnDocumentPoll = (contracts, galaxy, proposal) =>
  contracts.polls.callStatic.hasVotedOnDocumentPoll(galaxy, proposal)

module.exports.updateDocumentPoll = (contracts, proposal) =>
  contracts.polls.callStatic.updateDocumentPoll(proposal)

