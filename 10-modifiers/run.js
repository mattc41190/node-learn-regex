const line = (() => console.log('----------'))

// Modifiers (Not Supported -- Mid 2018)

// Test PASSES and will capture the first word in each line
console.log('Example 1')
console.log("/(?m)^\\w+/.test('Fun for ants.\\n Fun for pants')")
console.log('Throws: SyntaxError')
// console.log(/(?m)^\w+/.test('Fun for ants.\n Fun for pants'))
line()

