const line = (() => console.log('----------'))

// Test PASSES for: "c" or "a" or "t"
console.log('Example 1')
console.log("/[cat]/.test('cXaXt')")
console.log(/[cat]/.test('cXaXt'))
line()

// Test PASSES for any letter between "a" and "t" (inclusive)
console.log('Example 2')
console.log("/[a-t]/.test('cXaXt')")
console.log(/[a-t]/.test('cXaXt'))
line()

// Test PASSES if "a" is included
console.log('Example 3')
console.log("/[a]/.test('cXaXt')")
console.log(/[a]/.test('cXaXt'))
line()

// Test FAILS when no letters in string fall between "x" and "z" (case matters)
console.log('Example 4')
console.log("/[x-z]/.test('cXaXt')")
console.log(/[x-z]/.test('cXaXt')) // false
line()

// Test PASSES if a letter between "A" and "Z" or "x" and "z" is included
console.log('Example 5')
console.log("/[x-zA-Z]/.test('cXaXt')")
console.log(/[x-zA-Z]/.test('cXaXt'))
line()

// Test PASSES if a letter "X" or a letter between "m" and "n" is included
console.log('Example 6')
console.log("/[m-nX]/.test('cXaXt')")
console.log(/[m-nX]/.test('cXaXt'))
line()

// Test FAILS when there are no characters that are NOT between "a" and "t" and NOT "X"
console.log('Example 7')
console.log("/[^a-t^X]/.test('cXaXt')")
console.log(/[^a-t^X]/.test('cXaXt')) // false
line()

// Test PASSES when there are characters that are NOT between "a" and "t" and NOT "X"
console.log('Example 8')
console.log("/[^a-t^X]/.test('0cXaXt0')")
console.log(/[^a-t^X]/.test('0cXaXt0'))
line()

// Test FAILS when there are no characters that are NOT between "a" and "t" and NOT "X" and NOT "0"
console.log('Example 9')
console.log("/[^a-t^X^0]/.test('0cXaXt0')")
console.log(/[^a-t^X^0]/.test('0cXaXt0')) // false
line()

// Test PASSES when there are characters that are between "a" and "z" or between "A" and "Z" or between "0" and "9" or character is the "-" symbol or character is the "&" symbol
console.log('Example 10')
console.log("/[a-zA-Z0-9\-\&]/.test('-&10cXaXt01&-')")
console.log(/[a-zA-Z0-9\-\&]/.test('-&10cXaXt01&-'))
line()

// Test PASSES if any characters are present in the test string
console.log('Example 11')
console.log("/[ -~]]/.test('-&10cXaXt01&-')")
console.log(/[ -~]/.test('-&10cXaXt01&-'))
line()

