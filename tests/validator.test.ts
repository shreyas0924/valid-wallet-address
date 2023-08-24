import { isValidAddress } from '../src'

describe('Ethereum Address Validator', () => {
  it('should correctly validate a valid address', async () => {
    const validAddress = '0x3B898Ccce32985d87D099593ECC0D241f94b98bb'
    const result = await isValidAddress(validAddress)
    expect(result).toBe(true)
  })

  it('should correctly validate an invalid address', async () => {
    const invalidAddress = '0x123'
    const result = await isValidAddress(invalidAddress)
    expect(result).toBe(false)
  })
})
