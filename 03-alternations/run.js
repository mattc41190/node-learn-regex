const line = (() => console.log('----------'))

// The pipe character as a logical OR
// The test PASSES when any word is present in the search string
console.log('Example 1')
console.log("/dog|cat|fish/.test('cat')")
console.log(/dog|cat|fish/.test('cat'))
line()

// The test FAILS no word in the search matches any alternate
console.log('Example 2')
console.log("/dog|cat|fish/.test('horse')")
console.log(/dog|cat|fish/.test('horse')) // false
line()