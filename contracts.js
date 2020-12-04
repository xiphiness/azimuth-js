/**
 * Contracts API
 * @module contracts
 */

const { Contract } = require("@ethersproject/contracts");

const { Web3Provider } = require("@ethersproject/providers");

const eclipticAbi = require("azimuth-solidity/build/contracts/Ecliptic.json")
  .abi;

const azimuthAbi = require("azimuth-solidity/build/contracts/Azimuth.json").abi;

const pollsAbi = require("azimuth-solidity/build/contracts/Polls.json").abi;

const claimsAbi = require("azimuth-solidity/build/contracts/Claims.json").abi;

const linearStarReleaseAbi = require("azimuth-solidity/build/contracts/LinearStarRelease.json")
  .abi;

const delegatedSendingAbi = require("azimuth-solidity/build/contracts/DelegatedSending.json")
  .abi;

const conditionalStarReleaseAbi = require("azimuth-solidity/build/contracts/ConditionalStarRelease.json")
  .abi;

/**
 * Create a collection of Urbit contracts, given an ethereum provider and their
 * provided addresses.
 * @param {Object} provider - Implementation of ethers' Provider or web3 instance.
 * @param {Object} addresses - An addresses object.  Must provide addresses for
 *   ecliptic, azimuth, and polls contracts, at those respective key names.
 * @return {Object} The initialised contracts.
 */
const initContracts = (provider, addresses) => {
  // N.B.
  // this is an ugly hack, Web3Provider seems to fail with web3.currentProvider
  // with the version of web3 old azimuth is pinned to
  // maybe drop support for it entirely?
  if ("currentProvider" in provider && window.ethereum) {
    provider = new Web3Provider(window.ethereum);
  }
  return {
    ecliptic: newEcliptic(provider, addresses.ecliptic),
    azimuth: newAzimuth(provider, addresses.azimuth),
    polls: newPolls(provider, addresses.polls),
    claims: newClaims(provider, addresses.claims),
    linearSR: newLinearStarRelease(provider, addresses.linearSR),
    conditionalSR: newConditionalStarRelease(provider, addresses.conditionalSR),
    delegatedSending: newDelegatedSending(provider, addresses.delegatedSending),
  };
};
/**
 * Initialise as many Urbit contracts as possible, given a azimuth contract
 * address.
 * @param {Object} provider - Implementation of ethers' Provider or web3 instance.
 * @param {String} azimuthAddress - An address to a azimuth contract.
 * @return {Object} The initialised contracts.
 */
const initContractsPartial = async (provider, azimuthAddress) => {
  if ("currentProvider" in provider && window.ethereum) {
    provider = new Web3Provider(window.ethereum);
  }
  let azimuth = newAzimuth(provider, azimuthAddress);
  let eclipticAddress = await azimuth.methods.owner().call();
  let ecliptic = newEcliptic(provider, eclipticAddress);
  let pollsAddress = await ecliptic.methods.polls().call();
  let polls = newPolls(provider, pollsAddress);
  let claimsAddress = await ecliptic.methods.claims().call();
  let claims = newClaims(provider, claimsAddress);
  return {
    ecliptic: ecliptic,
    azimuth: azimuth,
    polls: polls,
    claims: claims,
  };
};

const newContract = (provider, address, abi) => {
  return new Contract(address, abi, provider);
};

const newEcliptic = (provider, address) =>
  newContract(provider, address, eclipticAbi);

const newAzimuth = (provider, address) =>
  newContract(provider, address, azimuthAbi);

const newPolls = (provider, address) =>
  newContract(provider, address, pollsAbi);

const newClaims = (provider, address) =>
  newContract(provider, address, claimsAbi);

const newLinearStarRelease = (provider, address) =>
  newContract(provider, address, linearStarReleaseAbi);

const newDelegatedSending = (provider, address) =>
  newContract(provider, address, delegatedSendingAbi);

const newConditionalStarRelease = (provider, address) =>
  newContract(provider, address, conditionalStarReleaseAbi);

module.exports = {
  initContracts,
  initContractsPartial,
  eclipticAbi,
  azimuthAbi,
  pollsAbi,
  claimsAbi,
  linearStarReleaseAbi,
  delegatedSendingAbi,
};
