
const assert = require('assert')
const { curry } = require('./curry')

// Используем встроенный модуль assert - не тянуть же ради этого в проект jest или что-то ещё
const eq = assert.strictEqual

const addFour = (one, two, three, four) => one + two + three + four
const addThreeTo100 = curry(addFour)(100)
const addTwoTo150 = addThreeTo100(50)
const addOneTo160 = addTwoTo150(10)

eq(curry(addFour)(1)(2)(3)(4), 10)
eq(addThreeTo100(1)(2)(3), 106)
eq(addThreeTo100(4)(5)(6), 115)
eq(addTwoTo150(1)(2), 153)
eq(addTwoTo150(3)(4), 157)
eq(addOneTo160(1), 161)
eq(addOneTo160(2), 162)
eq(addThreeTo100(200,300,400), 1000)
eq(addThreeTo100(11,22)(33), 166)
eq(addTwoTo150(-200,-300), -350)
eq(curry(addFour)(-1)(-2,-3)(-4), -10)

try {
  console.log(addTwoTo150(1,2,3))
} catch (e) {
  eq(e.message, 'Expected 4 arguments, received: 5')
}

console.log('All tests passed')
