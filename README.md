# vanity-key

Generate vanity prefixes for Bitcoin public key addresses

## Installation

This module is installed via npm:

``` bash
$ npm install -g vanity-key
```

## Usage

``` bash
$ vanity-key [prefix]
```

Where prefix is your desired bitcoin public address prefix.

__NB: prefix must start with a '1', contain only base58 characters, and be
less than 34 characters in total.__

## Example Usage

``` bash
$ vanity-key 1EW
Public Key:  1EWHVkHs4CkuWtaESqQoQ2EtXK8RK13vTb
Private Key: 5KbiL1WvYfVXvddW49MmrZpUpfLofdZTshRp9QmiJFGjBcpoK4g
```
