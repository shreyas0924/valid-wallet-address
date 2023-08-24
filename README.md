# Ethereum Address Validator

[![npm version](https://img.shields.io/npm/v/valid-wallet-address.svg)](https://www.npmjs.com/package/valid-wallet-address)
[![License](https://img.shields.io/npm/l/valid-wallet-address.svg)](https://github.com/your-username/valid-wallet-address/blob/main/LICENSE)

A utility to validate Ethereum wallet addresses for their correctness and existence on the Ethereum network.

<!-- ## Table of Contents

- [Ethereum Address Validator](#ethereum-address-validator)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation) -->

## Installation

You can install the Ethereum Address Validator package using npm:

```sh
npm install valid-wallet-address
```

1. Import the isValidAddress function from the package:

```javascript
import { isValidAddress } from 'valid-wallet-address'
```

2. Provide an Ethereum address to the isValidAddress function:

```javascript
const address = '0xaddress'
isValidAddress(address)
  .then((valid) => {
    if (valid) {
      console.log('Valid Ethereum address')
    } else {
      console.log('Invalid Ethereum address')
    }
  })
  .catch((error) => console.error('Error:', error))
```

The function returns a Promise that resolves to true for a valid Ethereum address and false for an invalid one.
