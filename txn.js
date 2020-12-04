/**
 * Transaction handling
 * @module txn
 */

const { Wallet } = require("@ethersproject/wallet");
const utils = require("./utils");

function renderAsHex(value) {
  return utils.addHexPrefix(value.toString("hex"));
}

/**
 * Sign an unsigned transaction with the provided private key.
 *
 * If `tx.gas` is undefined, it will be estimated.  If `tx.gasPrice` is
 * undefined, a default is used.  If `tx.nonce` is undefined, Ethers will
 * retrieve the next nonce.  And if `tx.chainId` is undefined, Ethers fills it
 * in.
 *
 * Note that Ethers cannot fill in most of those blanks when not connected to
 * a functioning node (i.e. "offline mode"), so those will have to be filled
 * in by the UI or user prior to signing.
 *
 * @param {Provider} provider - a provider object.
 * @param {Object} tx - an unsigned transaction.
 * @param {Buffer} privateKey - a private key.
 * @return {Promise<Object>} A signed transaction object with `messageHash`,
 *  `v`, `r`, `s`, and `rawTransaction` fields.
 */
async function signTransaction(provider, tx, privateKey) {
  let pk = renderAsHex(privateKey);
  const signer = new Wallet(pk).connect(provider);
  if (!utils.isValidPrivate(privateKey)) {
    throw "Invalid key";
  }
  if (!tx.gasLimit) {
    let preliminary = await signer.estimateGas(tx);
    tx.gasLimit = Math.floor(preliminary * 2.1);
  }
  if(!tx.nonce) {
    tx.nonce = await provider.getTransactionCount(tx.from)
  }
  return signer.signTransaction(tx);
}

/**
 * Forward a signed transaction to the blockchain.
 * @param {Provider} provider - a provider object.
 * @param {Object} signedTx - a signed transaction.
 * @return {Promise}
 */
function sendSignedTransaction(provider, stx) {
  return new Promise((resolve, reject) =>
    provider
      .sendTransaction(stx)
      .then((res) => {
        return res.wait(1).then((receipt) => {
          if (receipt.status) {
            resolve(receipt);
          } else {
            reject(receipt);
          }
        });
      })
      .catch((e) => {
        console.error(e);
        reject(e);
      })
  );
}

module.exports = {
  signTransaction,
  sendSignedTransaction,
};
