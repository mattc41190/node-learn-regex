const line = (() => console.log('----------'))

// Test PASSES when the number inside of the curly brace matches a pattern
console.log('Example 1')
console.log("/Z{4}/.test('ZZZZ')")
console.log(/Z{4}/.test('ZZZZ'))
line()

// Test FAILS when the number inside of the curly brace doen't match a pattern
console.log('Example 2')
console.log("/Z{10}/.test('ZZZZ')")
console.log(/Z{10}/.test('ZZZZ')) //false
line()

// Test PASSES when the range inside of the curly brace is met (Greedy Version)
console.log('Example 3')
console.log("/Z{2,4}/.test('ZZZZ')")
console.log(/Z{2,4}/.test('ZZZZ'))
line()

// Test PASSES when the range inside of the curly brace is met (Non-Greedy Version)
console.log('Example 4')
console.log("/Z{2,4}?/.test('ZZZZ') // Non-Greedy")
console.log(/Z{2,4}?/.test('ZZZZ'))
line()

// Test PASSES when metacharacters are used
console.log('Example 5')
console.log("/\\w{1}/.test('ZZZZ')")
console.log(/\w{1}/.test('ZZZZ'))
line()