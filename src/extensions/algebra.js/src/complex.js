import { Expression } from './expressions.js'
import { isInt } from './helper.js'
import Fraction from './fractions.js'

class Complex {
  constructor(real, imaginary) {
    if (real instanceof Fraction && imaginary instanceof Fraction) {
      this.real = real
      this.imaginary = imaginary
    } else {
      throw new TypeError(
        'Invalid Argument (' +
          real.toString() +
          ', ' +
          imaginary.toString() +
          '): Real and imaginary parts must be of type Fraction.'
      )
    }
  }
  copy() {
    return new Complex(this.real, this.imaginary)
  }
  add(a) {
    var copy = this.copy()

    if (a instanceof Fraction || isInt(a)) {
      copy.real = copy.real.add(a)
    } else if (a instanceof Complex) {
      copy.real = copy.real.add(a.real)
      copy.imaginary = copy.imaginary.add(a.imaginary)
    } else {
      throw new TypeError(
        'Invalid Argument (' + a.toString() + '): Summand must be of type Complex, Fraction or Integer.'
      )
    }

    return copy
  }
  subtract(a) {
    var copy = this.copy()

    if (a instanceof Fraction || isInt(a)) {
      copy.real = copy.real.subtract(a)
    } else if (a instanceof Complex) {
      copy.real = copy.real.subtract(a.real)
      copy.imaginary = copy.imaginary.subtract(a.imaginary)
    } else {
      throw new TypeError(
        'Invalid Argument (' + a.toString() + '): Subtrahend must be of type Complex, Fraction or Integer.'
      )
    }

    return copy
  }
  multiply(a) {
    if (a instanceof Fraction || isInt(a)) {
      var copy = this.copy()
      copy.real = copy.real.multiply(a)
      copy.imaginary = copy.imaginary.multiply(a)
      return copy
    } else if (a instanceof Complex) {
      var expr1 = new Expression('i').multiply(this.imaginary).add(this.real)
      var expr2 = new Expression('i').multiply(a.imaginary).add(a.real)
      var foil = expr1.multiply(expr2)
      var coefs = foil._quadraticCoefficients()
      var a = coefs.a
      var b = coefs.b
      var c = coefs.c

      var real = a.multiply(-1).add(c)
      return new Complex(real, b)
    } else {
      throw new TypeError(
        'Invalid Argument (' + a.toString() + '): Multiplicand must be of type Complex, Fraction or Integer.'
      )
    }
  }
  divide(a) {
    if (a instanceof Fraction || isInt(a)) {
      var copy = this.copy()
      copy.real = copy.real.divide(a)
      copy.imaginary = copy.imaginary.divide(a)
      return copy
    } else if (a instanceof Complex) {
      var conjugate = new Complex(a.real, a.imaginary.multiply(-1))
      var numerator = this.multiply(conjugate)
      var denominator = a.multiply(conjugate).real
      return numerator.divide(denominator)
    } else {
      throw new TypeError(
        'Invalid Argument (' + a.toString() + '): Divisor must be of type Complex, Fraction or Integer.'
      )
    }
  }
}

export default Complex
