function gcd(x, y) {
  while (y) {
    var temp = x
    x = y
    y = temp % y
  }

  return x
}

function lcm(x, y) {
  return (x * y) / gcd(x, y)
}

function isInt(thing) {
  return typeof thing == 'number' && thing % 1 === 0
}

function round(decimal, places) {
  places = typeof places === 'undefined' ? 2 : places
  var x = Math.pow(10, places)
  return Math.round(parseFloat(decimal) * x) / x
}

var GREEK_LETTERS = [
  'alpha',
  'beta',
  'gamma',
  'Gamma',
  'delta',
  'Delta',
  'epsilon',
  'varepsilon',
  'zeta',
  'eta',
  'theta',
  'vartheta',
  'Theta',
  'iota',
  'kappa',
  'lambda',
  'Lambda',
  'mu',
  'nu',
  'xi',
  'Xi',
  'pi',
  'Pi',
  'rho',
  'varrho',
  'sigma',
  'Sigma',
  'tau',
  'upsilon',
  'Upsilon',
  'phi',
  'varphi',
  'Phi',
  'chi',
  'psi',
  'Psi',
  'omega',
  'Omega',
]

const _gcd = gcd
export { _gcd as gcd }
const _lcm = lcm
export { _lcm as lcm }
const _isInt = isInt
export { _isInt as isInt }
const _round = round
export { _round as round }
const _GREEK_LETTERS = GREEK_LETTERS
export { _GREEK_LETTERS as GREEK_LETTERS }
