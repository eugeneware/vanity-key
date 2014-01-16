#!/usr/bin/env node
var vanityKey = require('..');
var alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

var prefix = process.argv[2] || '';
var error;

if (prefix === '-h' || prefix === '--help') {
  console.error('Usage: vanity-key [prefix]');
  process.exit();
}

if (prefix && prefix.length) {
  if (prefix[0] !== '1') {
    error = 'Prefix must start with a 1';
  } else if (prefix.length > 34) {
    error = 'Prefix must be less than or equal 34 characters';
  } else {
    for (var i = 0, len = prefix.length; i < len; i++) {
      var c = prefix[i];
      if (!~alphabet.indexOf(c)) {
        error = 'Prefix contains an invalid base58 character: ' + c;
        break;
      }
    }
  }

  if (error) {
    console.error('Error: ' + error);
    process.exit(1);
  }
}
var key = vanityKey(prefix);
console.log(' Public Key: ' + key.getBitcoinAddress().toString());
console.log('Private Key: ' + key.getExportedPrivateKey());
