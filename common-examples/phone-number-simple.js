const pattern = /((\+\d{1,2})\ )?\d{3}-\d{3}-\d{4}/

const phoneNumbers = ['972-999-9090', '+1 214-909-8822', '+44 512-555-9090', '972/777/8181']

phoneNumbers.forEach(number => {
    if (pattern.test(number)) {
      console.log(`${number} is in the correct format`)
    } else {
      console.log(`${number} is not in the correct format accepted format below`)
      console.log('XXX-XXX-XXXX')
    }
})