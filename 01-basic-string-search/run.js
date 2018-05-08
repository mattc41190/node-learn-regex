const line = (() => console.log('----------'))

console.log('Example 1')
console.log("/cat/.test('cat')")
console.log(/cat/.test('cat'))
line()

console.log('Example 2')
console.log("/dog/.test('a big pretty dog')")
console.log(/dog/.test('a big pretty dog'))
line()

console.log('Example 3')
console.log("/bird/.test('b i r d')")
console.log(/bird/.test('b i r d')) // false
line()