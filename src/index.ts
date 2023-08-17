import * as cheerio from 'cheerio'
import axios from 'axios'

async function isValidAddress(address: string): Promise<void> {
  try {
    const response = await axios.get(`https://etherscan.io/address/${address}`)
    const $ = cheerio.load(response.data)

    const titleContent: string = $('title').text()

    if (
      titleContent === 'Ethereum Account - Invalid Address' ||
      'Ethereum Account (Invalid Address)'
    ) {
      console.log('Invalid Address')
    } else {
      console.log('Valid Address')
    }
  } catch (error) {
    console.error('Error scraping data:', error)
  }
}

isValidAddress('0x123')

export default isValidAddress
