// In certain log statemnts double slashes are needed to escape. They are cosmetic.
const line = (() => console.log('----------'))

// Character: "."

// Test PASSES for any characters except new line
console.log('Example 1')
console.log("/./.test('R@nDom!')")
console.log(/./.test('R@nDom!'))
line()

// Test FAILS for new line character 
console.log('Example 2')
console.log("/./.test('\\n')")
console.log(/./.test('\n')) // false
line()

// Test FAILS when "." is escaped and a literal "." is NOT present
console.log('Example 3')
console.log("/\./.test('R@nDom!')")
console.log(/\./.test('R@nDom!')) // false
line()

// Test PASSES when "." is escaped and a literal "." is present
console.log('Example 4')
console.log("/\\./.test('R@nDom.')")
console.log(/\./.test('R@nDom.'))
line()

// Character: "\w"

// Test PASSES when characters in ranges [a-z],[A-Z],[0-9] any or all are present
console.log('Example 5')
console.log("/\\w/.test('aaaBBB333')")
console.log(/\w/.test('aaaBBB333'))
line()

// Test FAILS when ONLY special characters are present
console.log('Example 6')
console.log("/\\w/.test('!@#$%^&')")
console.log(/\w/.test('!@#$%^&')) // false
line()

// Character: "\W"

// Test PASSES when ONLY special characters are present
console.log('Example 7')
console.log("/\\W/.test('!@#$')")
console.log(/\W/.test('!@#$'))
line()

// Test FAILS when characters in ranges [a-z], [A-Z], [0-9] are present
console.log('Example 8')
console.log("/\\W/.test('aaaBBB333')")
console.log(/\W/.test('aaaBBB333')) // false
line()

// Character: "\d"

// Test PASSES when characters in ranges [0-9] are present
console.log('Example 9')
console.log("/\\d/.test('10')")
console.log(/\d/.test('10'))
line()

// Test FAILS when only characters in ranges [a-z] or [A-Z] are present
console.log('Example 10')
console.log("/\\d/.test('aAzZ')")
console.log(/\d/.test('aAzZ')) //false
line()

// Test FAILS when only special characters are present
console.log('Example 11')
console.log("/\\d/.test('!@#$%')")
console.log(/\d/.test('!@#$%')) //false
line()

// Character: "\D"

// Test PASSES when characters in range [0-9] are NOT present
console.log('Example 12')
console.log("/\\D/.test('ABC!@#abc')")
console.log(/\D/.test('ABC!@#abc'))
line()

// Test FAILS when only characters in range [0-9] are present
console.log('Example 13')
console.log("/\\D/.test('10')")
console.log(/\D/.test('10')) //false
line()

// Character: "\n"

// Test PASSES when new line / \n is present
console.log('Example 14')
console.log("/\\n/.test('\\n')")
console.log(/\n/.test('\n'))
line()

// Character: "\t"

// Test PASSES when tab / \t is present
console.log('Example 15')
console.log("/\\t/.test('\\t')")
console.log(/\t/.test('\t'))
line()

// Character: "\b"

// Test PASSES when there is a word break
console.log('Example 16')
console.log("/woo\\b/('woo hoo')")
console.log(/woo\b/.test('woo hoo'))
line()

// Test FAILS when there is no word break
console.log('Example 17')
console.log("/woo\\b/('woohoo')")
console.log(/woo\b/.test('woohoo')) // false
line()
