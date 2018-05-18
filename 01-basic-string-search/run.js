const line = (() => console.log('----------'))

// The test PASSES when "cat" is present in search string
console.log('Example 1')
console.log("/cat/.test('cat')")
console.log(/cat/.test('cat'))
line()

// The test PASSES when "dog" is in search string 
console.log('Example 2')
console.log("/dog/.test('a big pretty dog')")
console.log(/dog/.test('a big pretty dog'))
line()

// The test FAILS when the pattern is not matched exactly. HINT: Space is a character
console.log('Example 3')
console.log("/bird/.test('b i r d')")
console.log(/bird/.test('b i r d')) // false
line()