import Equation from './src/equations.js'
import { Expression } from './src/expressions.js'
import Fraction from './src/fractions.js'
import Parser from './src/parser.js'

const parse = function (input) {
  let parser = new Parser()
  let result = parser.parse(input)
  return result
}

const toTex = function (input) {
  if (input instanceof Fraction || input instanceof Expression || input instanceof Equation) {
    return input.toTex()
  } else if (input instanceof Array) {
    return input
      .map(function (e) {
        if (e instanceof Fraction) {
          return e.toTex()
        } else {
          return e.toString()
        }
      })
      .join()
  } else {
    return input.toString()
  }
}

export { Fraction, Equation, Expression, parse, toTex }
