import { CardContent } from 'entity/Card';

const toStringCode = `const num = 123;
console.log(num.toString()); //"123"`;

const toExponentialCode = `const num = 9.656;
console.log(num.toExponential(4)); //"9.6560e+0"`;

const toFixedCode = `const num = 9.656;
console.log(num.toFixed(4)); //"9.6560"`;

const toPrecisionCode = `const num = 9.656;
console.log(num.toPrecision(3)); //"9.66"`;

const addCode = `const num1 = 10;
const num2 = 25;
console.log(num1 + num2); //35`;

const subCode = `const num1 = 10;
const num2 = 3;
console.log(num1 - num2); //7`;

const multiCode = `const num1 = 10;
const num2 = 2;
console.log(num1 * num2); //20`;

const divCode = `const num1 = 10;
const num2 = 2;
console.log(num1 / num2); //5`;

const exponentCode = `const num1 = 14;
const num2 = 2;
console.log(num1 ** num2); //196`;

const modulusCode = `const num1 = 10;
const num2 = 2;
console.log(num1 % num2); //0`;

const incrementCode = `let num = 10;
console.log(10 += 1); //11`;

const decrementCode = `let num = 10;
console.log(10 -= 1); //9`;

const numbersContent: CardContent[] = [{
    text: 'To String',
    code: toStringCode,
}, {
    text: 'To Exponential',
    code: toExponentialCode,
}, {
    text: 'To Fixed',
    code: toFixedCode,
}, {
    text: 'To Precision',
    code: toPrecisionCode,
}, {
    text: 'Addition',
    code: addCode,
}, {
    text: 'Subtraction',
    code: subCode,
}, {
    text: 'Multiplication',
    code: multiCode,
}, {
    text: 'Division',
    code: divCode,
}, {
    text: 'Exponent',
    code: exponentCode,
}, {
    text: 'Modulus (Remainder)',
    code: modulusCode,
}, {
    text: 'Increment',
    code: incrementCode,
}, {
    text: 'Decrement',
    code: decrementCode,
}];

export default numbersContent;
