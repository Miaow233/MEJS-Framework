import { Equation, Expression } from '../extensions/algebra.js/algebra.js'
import { Arrays, FileReader, OutputStreamWriter, URL, URLConnection } from '../packages/java.js'

var expr = new Expression('x')
expr = expr.subtract(3)
expr = expr.add('x')
var eq = new Equation(expr, 4)
eq.solveFor('y')
console.log(expr.toString())
console.log(eq.toString())
let filereader = new FileReader('src/math.ts')
let lines = filereader.read()
let res = new URL('https://www.google.com').openConnection().getContent()
