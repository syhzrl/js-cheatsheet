import { CardContent } from 'entity/Card';

const methodsCode = `const fruits = ['🍎', '🍌', '🍇'];

fruits.pop(); //['🍎', '🍌']
fruits.push('🍍'); //['🍎', '🍌', '🍇', '🍍']

fruits.shift(); //['🍌', '🍇']
fruits.unshift('🍍'); //['🍍','🍎', '🍌', '🍇']

//splice(entryPoint, howManyToRemove, itemsToAdd)
fruits.splice(2, 0, '🍓'); //['🍎', '🍌', '🍇','🍓']

//slice(start, end)
fruits.slice(1, 2); //['🍌']

const food = fruits.concat('🍔'); //['🍎', '🍌', '🍇', '🍔']

//map((item, index) => function)
const mapped = fruits.map((fruit) => {
   return fruit.concat('🧃');
}); //['🍎🧃', '🍌🧃', '🍇🧃']`;

const sortCode = `const names = ['Bob', 'Alex', 'Kyle'];

dogs.sort(); //['Alex', 'Bob', 'Kyle']
dogs.reverse(); //['Kyle', 'Bob', 'Alex']

const nums = [1, 10, 5, 2];

nums.sort(function(a, b){return a - b}); //[1, 2, 5, 10]
nums.sort(function(a, b){return b - a}); //[10, 5, 2, 1]`;

const searchCode = `const pets = ['🐱', '🐶', '🐸'];

pets.indexOf('🐱'); //0
pets.includes('🐔'); //false

//find(item => function)
const frog = pets.find(item => item === '🐸'); //'🐸'

//findIndex(item => function)
const frogIndex = pets.findIndex(item => item === '🐸'); //2

const nums = [1, 10, 5, 2];

//filter(item => function)
const filtered = nums.filter(item => item < 10); //[1, 5, 2]`;

const arraysContent: CardContent[] = [{
    text: 'Transformation',
    code: methodsCode,
}, {
    text: 'Sorting',
    code: sortCode,
}, {
    text: 'Searching',
    code: searchCode,
}];

export default arraysContent;
