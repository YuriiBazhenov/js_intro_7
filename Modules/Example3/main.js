

// import {add} from "./math.js"
// import {add as dateAdd} from "./math.js"

import * as MATH from './math.js';
import * as DATE from "./date.js";
import MathClass from './math.js';

console.log(MATH.add(1, 2))
console.log(DATE.add(4, 5))

console.log(MATH.substract(9, 2))
console.log(DATE.getCurrentYear())

const mathObj = new MathClass(5, 5)

console.log(mathObj.add())
