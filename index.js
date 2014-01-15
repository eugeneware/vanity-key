var Address = require('bitcoinjs-lib/src/address'),
    ECKey = require('bitcoinjs-lib/src/eckey');

module.exports = vanityKey;
function vanityKey(prefix) {
  var key = new ECKey();
  var a = new Address(key.getPubKeyHash()).toString();
  while (a.indexOf(prefix) !== 0) {
    key = new ECKey();
    a = new Address(key.getPubKeyHash()).toString();
  }
  return key;
}
