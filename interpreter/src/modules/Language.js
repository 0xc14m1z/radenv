const Language = {}

const SCOPE = {}

Language.define = function define(property) {
  SCOPE[property] = undefined
}

Language.assign = function assign(property, value) {
  SCOPE[property] = value
}

Language.plus = function plus(operand1, operand2) {
  return operand1 + operand2
}

Language.minus = function minus(operand1, operand2) {
  return operand1 - operand2
}

Language.multiply = function multiply(operand1, operand2) {
  return operand1 * operand2
}

Language.divide = function divide(operand1, operand2) {
  return operand1 / operand2
}

Language.equal = function equal(operand1, operand2) {
  return operand1 === operand2
}

Language.greaterThan = function greaterThan(operand1, operand2) {
  return operand1 > operand2
}

Language.lessThan = function lessThan(operand1, operand2) {
  return operand1 < operand2
}

Language.greaterOrEqualThan = function greaterOrEqualThan(operand1, operand2) {
  return Language.greaterThan(operand1, operand2) || Language.equal(operand1, operand2)
}

Language.lessOrEqualThan = function lessOrEqualThan(operand1, operand2) {
  return Language.lessThan(operand1, operand2) || Language.equal(operand1, operand2)
}

Language.if = function ifCondition(condition, whenTrue, whenFalse) {}

Language.forEach = function forEach(items, callback) {
  items.forEach(item => callback(item))
}

Language.execute = function execute(fn) {}

Language.call = function call(fn) {}

Language.evaluate = function evaluate(expression) {
  console.log(expression)
}

export default Language
