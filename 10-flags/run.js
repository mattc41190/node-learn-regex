const line = (() => console.log('----------'))

// Multiline Flag: /pattern/m

// Test PASSES and will capture even if match is on newline
console.log('Example 1')
console.log("/^funny/m.test('silly dog \\nfunny cat')")
console.log(/^funny/m.test('silly dog \nfunny cat'))
line()

// Test FAILS when multiline flag is absent
console.log('Example 2')
console.log("/^funny/.test('silly dog \\nfunny cat')")
console.log(/^funny/.test('silly dog \nfunny cat')) // false
line()

// Ignore Case Flag: /pattern/i

// Test PASSES and will capture even if match is not in the case as the pattern
console.log('Example 3')
console.log("/silly dog/i.test('silly DOg')")
console.log(/silly dog/i.test('silly DOg'))
line()

// Test FAILS when ignore case flag is absent
console.log('Example 4')
console.log("/silly dog/.test('silly DOg')")
console.log(/silly dog/.test('silly DOg')) // false
line()

