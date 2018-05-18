const pattern = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

const ips = [
  '192.168.10.24',
  '255.255.255.0',
  '12.126.112.214',
  '1.11.1'
]

ips.forEach(ip => {
    if (pattern.test(ip)) {
      console.log(`${ip} is in the correct format`)
    } else {
      console.log(`${ip} is not in the correct format accepted format below`)
      console.log('XXX.XXX.XXX.XXX')
      console.log('X.X.X.X')
    }
})