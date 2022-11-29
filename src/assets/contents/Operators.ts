import { CardContent } from 'entity/Card';

const operatorsCode = `const name = 'Bob';

name === 'Jim'; //false
name !== 'Jim'; //true

true && true //true
true && false //false
true || false //true

10 > 2 //true
10 < 3 //false
2 >= 1 //true
20 <= 20 //true`;

const conditionalCode = `const isTrue = true;

if (isTrue) return 'its true!'
else return 'its false!'
//'its true!'

const num = 3;

switch (num) {
    case 1: return 'One!';
    case 2: return 'Two!';
    case 3: return 'Three!';
    default: return 'Default!';
} //'Three!'`;

const operatorsContent: CardContent[] = [{
    text: 'Operators',
    code: operatorsCode,
},
{
    text: 'Conditionals',
    code: conditionalCode,
}];

export default operatorsContent;
