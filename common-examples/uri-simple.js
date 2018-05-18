const pattern = /(https?:\/\/)?\w+\.[a-z0-9\ -~]+\.\w+/i

const uris = [
  'http://www.google.com', 
  'http://fart.com',
  'http://www.netnews.net',
  'https://let.it.go',
  'http://www.wind0ws.com'
]

uris.forEach(uri => {
    if (pattern.test(uri)) {
      console.log(`${uri} is in the correct format`)
    } else {
      console.log(`${uri} is not in the correct format accepted format below`)
      console.log('http://do.ma.in');
    }
})