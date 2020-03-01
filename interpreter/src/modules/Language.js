const Language = {}

const SCOPE = {}

SCOPE['alert'] = window.alert

Language.define = function define(property) {
  SCOPE[property] = undefined
}

Language.assign = function assign(property, value) {
  SCOPE[property] = value
}

Language.plus = function plus(firstOperand, secondOperand) {
  return firstOperand + secondOperand
}

Language.minus = function minus(firstOperand, secondOperand) {
  return firstOperand - secondOperand
}

Language.multiply = function multiply(firstOperand, secondOperand) {
  return firstOperand * secondOperand
}

Language.divide = function divide(firstOperand, secondOperand) {
  return firstOperand / secondOperand
}

Language.equal = function equal(firstOperand, secondOperand) {
  return firstOperand === secondOperand
}

Language.greaterThan = function greaterThan(firstOperand, secondOperand) {
  return firstOperand > secondOperand
}

Language.lessThan = function lessThan(firstOperand, secondOperand) {
  return firstOperand < secondOperand
}

Language.greaterOrEqualThan = function greaterOrEqualThan(firstOperand, secondOperand) {
  return Language.greaterThan(firstOperand, secondOperand) || Language.equal(firstOperand, secondOperand)
}

Language.lessOrEqualThan = function lessOrEqualThan(firstOperand, secondOperand) {
  return Language.lessThan(firstOperand, secondOperand) || Language.equal(firstOperand, secondOperand)
}

Language.if = function ifCondition(condition, whenTrue, whenFalse) {}

Language.forEach = function forEach(items, callback) {
  items.forEach(item => callback(item))
}

Language.execute = function execute(fn) {
  fn()
}

Language.call = function call(fn) {}

Language.evaluate = function evaluate(expressions) {}

export default Language
