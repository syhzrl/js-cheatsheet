import { CardContent } from 'entity/Card';

const staticVarCode = `const name = 'Hangman'; //string
const age = 24; //number
const isPilot = true; //boolean
const arrayOfPilotsName = ['Maverick', 'Rooster', 'Pheonix']; //array
const fighterPilot = {
    name: 'Bob',
    age: 22,
    isPilot: false,
}; //object`;

const mutableVarCode = `let car = 'Honda';
car = 'Toyota';
console.log(car); //Toyota`;

const variablesContent: CardContent[] = [{
    text: 'Declaring static variables',
    code: staticVarCode,
}, {
    text: 'Declaring mutable variables',
    code: mutableVarCode,
}];

export default variablesContent;
