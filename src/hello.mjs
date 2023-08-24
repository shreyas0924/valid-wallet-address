import { isValidAddress } from '../dist/index.mjs'

//boiler plate
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
