
// simple unsigned transaction generator
//
// grab the specified contract method, call it with the passed arguments (if
// there are any), and assemble a raw unsigned transaction.
//
function tx(contract, method, ...args) {

  let data = contract.interface.encodeFunctionData(method, args)

  return { to: contract.address, data: data, value: 0 }
}

module.exports = {
  tx
}
