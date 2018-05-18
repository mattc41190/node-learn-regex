const pattern = /\d{1,6}\ \w+/i

const addresses = [
  '888 Waterson Street', 
  '712 Winding Creek Court', 
  '9345 Washington Ave',
  '8295 Wallaby Tree Way' 
]

addresses.forEach(address => {
    if (pattern.test(address)) {
      console.log(`${address} is in the correct format`)
    } else {
      console.log(`${address} is not in the correct format accepted format below`)
    }
})