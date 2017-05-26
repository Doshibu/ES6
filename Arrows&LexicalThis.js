/*
	Arrows are a function shorthand using the "=>" syntax.
	They are syntactically similar to the related feature e in C#, Java 8 and CoffeeScript.
	They support both expression and statement bodies. Unlike functions, arrows share the same lexical "this"
	as their surrounding code.
*/

/// //////////////////////////////////////////////////
/// //####			PRESENTATION			####/////
/// //////////////////////////////////////////////////

// Expression bodies
var odds = evens.map(v => v + 1)
var nums = evens.map((v, i) => v + i)

// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0) {
    fives.push(v)
  }
})

// Lexical this
var bob = {
  _name: 'Bob',
  _friends: [],
  printFriends () {
    this._friends.forEach(f => console.log(this._name + ' knows' + f))
  }
}

/// //////////////////////////////////////////////////
/// //####			  EXAMPLES				####/////
/// //////////////////////////////////////////////////

// 1)
	// Without arrow
const students = ['Ben', 'Bruce', 'Betoven']
alert(students.filter(function (s) { return s === 'Bruce' }).length >= 1)

	// ES6 - With arrow
const students = ['Ben', 'Bruce', 'Betoven']
alert(students.filter(s => { return s === 'Bruce' }).length >= 1)
