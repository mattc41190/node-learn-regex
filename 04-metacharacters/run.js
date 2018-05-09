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

// Test PASSES when characters in ranges [a-z], [A-Z], [0-9] are present
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