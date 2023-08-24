import * as cheerio from 'cheerio'

async function isValidAddress(address: string): Promise<boolean> {
  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
    return false
  }
  try {
    const response = await fetch(`https://etherscan.io/address/${address}`)
    const data = await response.text()
    const $ = cheerio.load(data)
    const titleContent = $('title').text()

    if (
      titleContent === ' Ethereum Account - Invalid Address ' ||
      titleContent === ' Ethereum Account (Invalid Address) '
    ) {
      return false // Invalid Address
    } else {
      return true // Valid Address
    }
  } catch (error) {
    console.error('Error scraping data:', error)
    return false
  }
}

export default isValidAddress
