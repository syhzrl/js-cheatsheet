import { CardContent } from 'entity/Card';

const arithmeticsCode = `const num1 = 10;
const num2 = 2;

num1 + num2; //12
num1 - num2; //8
num1 * num2; //20
num1 / num2; //5
num1 += 1; //increment
num1 -= 1; //decrement

//exponent
num1 ** num2; //100
//modulus ( remainder )
num1 % num2; //0`;

const extraCode = `const num = 9.656;

//toString
num.toString(); //"9.656"
//toExponential
num.toExponential(4); //"9.6560e+0"
//toFixed
num.toFixed(4); //"9.6560"
//toPrecision
num.toPrecision(3); //"9.66"`;

const numbersContent: CardContent[] = [{
    text: 'Arithmetics',
    code: arithmeticsCode,
}, {
    text: 'Extras',
    code: extraCode,
}];

export default numbersContent;
