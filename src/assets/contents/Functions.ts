import { CardContent } from 'entity/Card';

const es5FuncCode = `function sayHello() {
    console.log('Hello! 👋');
}

sayHello(); //Hello! 👋`;

const es6FuncCode = `const sayHello = () => {
    console.log('Hello! 👋');
}

sayHello(); //Hello! 👋`;

const funcVarCode = `const iLikeFruit = (fruit) => {
    console.log('I like ' + fruit);
}

iLikeFruit('🍎'); //I like 🍎`;

const funcDefaultVarCode = `const addBy4 = (num = 1) => {
    console.log(num + 4);
}

addBy4(); //5
addBy4(6); //10`;

const functionsContent: CardContent[] = [{
    text: 'ES5 functions',
    code: es5FuncCode,
}, {
    text: 'ES6 arrow functions',
    code: es6FuncCode,
}, {
    text: 'Function parameters',
    code: funcVarCode,
}, {
    text: 'Function parameters with default value',
    code: funcDefaultVarCode,
}];

export default functionsContent;
