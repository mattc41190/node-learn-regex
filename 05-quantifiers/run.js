const line = (() => console.log('----------'))

// Quantifier: "+"

// Test PASSES when there is at least one word one or more times
console.log('Example 1')
console.log("/[a-zA-Z]+/.test('My name is Henry')")
console.log(/[a-zA-Z]+/.test('My name is Henry'))
line()

// Test PASSES when there is at least one collection of numbers one or more times
console.log('Example 2')
console.log("/\\d+/.test('867 5309')")
console.log(/\d+/.test('867 5309'))
line()

// Quantifier: "*"

// Test PASSES when there is at least one word zero or more times
console.log('Example 3')
console.log("/[a-zA-Z]*/.test('')")
console.log(/[a-zA-Z]*/.test(''))
line()

// Test PASSES when there is at least one collection of numbers zero or more times
console.log('Example 4')
console.log("/\\d*/.test('')")
console.log(/\d*/.test(''))
line()

// Quantifier: "?"

// Test PASSES when a letter that is optional is present
console.log('Example 5')
console.log("/bob?/.test('bob')")
console.log(/bob?/.test('bob'))
line()

// Test PASSES when a letter that is optional is absent
console.log('Example 6')
console.log("/bob?/.test('bo')")
console.log(/bob?/.test('bo'))
line()

// Test FAILS when a character that is optional is absent and so is the preceeding character
console.log('Example 7')
console.log("/bob?/.test('b')")
console.log(/bob?/.test('b')) // false
line()
