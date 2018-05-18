const line = (() => console.log('----------'))

// Lookaheads PATTERN(?= PATTERN)

// Test PASSES when the word under inspection is followed by the lookahead pattern
// NOTE: In this case the matched word is cool, not cool cat
console.log('Example 1')
console.log("/cool(?=\\ cat)/.test('cool cat')")
console.log(/cool(?=\ cat)/.test('cool cat'))
line()

// Test PASSES when the word under inspection is NOT followed by the lookahead pattern
// NOTE: In this case the matched word is cool, not cool dog
console.log('Example 2')
console.log("/cool(?!\\ cat)/.test('cool dog')")
console.log(/cool(?!\ cat)/.test('cool dog'))
line()

// Test FAILS when the word under inspection is NOT followed by the lookahead pattern
console.log('Example 3')
console.log("/cool(?=\\ cat)/.test('cool dog')")
console.log(/cool(?=\ cat)/.test('cool dog')) // false
line()

// Test FAILS when the word under inspection is followed by the lookahead pattern
console.log('Example 4')
console.log("/cool(?!\\ cat)/.test('cool cat')")
console.log(/cool(?!\ cat)/.test('cool cat')) // false
line()

// Lookbehinds (Not Supported -- Mid 2018)
console.log('Please Note: Lookbehinds not supported in Node 2017/2018.')
