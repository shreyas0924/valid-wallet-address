import * as cheerio from 'cheerio'

async function isValidAddress(address: string) {
  try {
    const response = await fetch(`https://etherscan.io/address/${address}`)
    const data = await response.text()
    const $ = cheerio.load(data)
    const titleContent = $('title').text()

    if (
      titleContent === 'Ethereum Account - Invalid Address' ||
      titleContent === 'Ethereum Account (Invalid Address)'
    ) {
      console.log('Invalid Address')
    } else {
      console.log('Valid Address')
    }
  } catch (error) {
    console.error('Error scraping data:', error)
  }
}

module.exports =  isValidAddress 
