const line = (() => console.log('----------'))

// The "^" character

// Test PASSES and will only capture the first instance of a word
console.log('Example 1')
console.log("/^This/.test('This is cool. This is not')")
console.log(/^This/.test('This is cool. This is not'))
line()

// Test FAILS when no sequence matches the pattern after "^"
console.log('Example 2')
console.log("/^This/.test('That is cool. That is not')")
console.log(/^This/.test('That is cool. That is not')) // false
line()

// Test FAILS when the word following the ^ is not at the beginning of the line
console.log('Example 3')
console.log("/^This/.test('That is cool. This is not')")
console.log(/^This/.test('That is cool. This is not')) // false
line()

// The "$" character

// Test PASSES if the last word matches the pattern preceding the $
console.log('Example 4')
console.log("/not$/.test('This is cool. This is not')")
console.log(/not$/.test('This is cool. This is not'))
line()

// Test FAILS if the last word does not match the pattern preceding the $
console.log('Example 5')
console.log("/$is/.test('That is cool. That is not')")
console.log(/$is/.test('That is cool. That is not')) // false
line()

// Bonus: Anchors work in combinations with other regex concepts

// Test PASSES when an anchor can capture 1 or more "regular" characters
console.log('Example 6')
console.log("/^\\w+/.test('What a wacky world')")
console.log(/^\w+/.test('What a wacky world'))
line()

