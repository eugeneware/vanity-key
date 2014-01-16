var ECKey = require('bitcoinjs-lib/src/eckey');

module.exports = vanityKey;
function vanityKey(prefix) {
  var key, a;
  do {
    key = new ECKey();
    a = key.getBitcoinAddress().toString();
  } while (a.indexOf(prefix) !== 0);
  return key;
}
