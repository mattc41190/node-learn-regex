// Examples of Types of Regex Testers in JS

// String Prototype Methods

const _match = () => {
  console.log('String - Match')
  console.log("'abc'.match(/abc/)")
  console.log('abc'.match(/abc/).length > 0)
}

const _search = () => {
  console.log('String - Search')
  console.log("'ZZZabcZZZ'.search(/abc/)")
  console.log('ZZZabcZZZ'.search(/abc/) === 3)
}

// RegEx Prototype Methods

const _testLiteral = () => {
  console.log('RegExp - TestLit')
  console.log("/abc/.test('abc')")
  console.log(/abc/.test('abc'))
}

const _test = () => {
  console.log('RegExp - Test')
  console.log("new RegExp('abc').test('abc')")
  console.log(new RegExp('abc').test('abc'))
}

const _exec = () => {
  console.log('RegExp - Exec')
  console.log("new RegExp('abc').exec('abc')")
  console.log(new RegExp('abc').exec('abc').length > 0)
}

// String Regular Expression Checkers
_match()
_search()

// Regular Expression Instance Methods
_testLiteral() // Included because of it's use in the tutorial
_test()
_exec()