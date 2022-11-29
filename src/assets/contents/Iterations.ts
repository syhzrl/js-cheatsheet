import { CardContent } from 'entity/Card';

const forCode = `const food = ['🍔', '🌭', '🍟'];
for (let i = 0; i < food.length; i += 1) {
    console.log('I like eating ' + food[i]);
}
//'I like eating 🍔'
//'I like eating 🌭'
//'I like eating 🍟'

for (let i = 0; i < food.length; i += 1) {
    if (i === 0) continue; //loop skips on this condition

    if (i === 2) break; //loop stops on this condition

    console.log('I like eating ' + food[i]);
}
//'I like eating 🌭'`;

const forEachCode = `//forEach is similar to for loop with lesser code
//break and continue does not work

const food = ['🍔', '🌭', '🍟'];

//Array.forEach((item, index) => function)
food.forEach(item => {
    console.log('I like eating ' + item);
});
//'I like eating 🍔'
//'I like eating 🌭'
//'I like eating 🍟'`;

const forInCode = `//for in is used to iterate over objects
const user = {
    name: 'Kratos',
    job: 'God of War',
}

for (let item in user) {
    console.log(user[item]);
}
//'Kratos'
//'God of War'`;

const whileCode = `//while loops loop on entry
let counter = 0;
while (counter < 3) {
    console.log(counter);
    counter += 1;
}
//0
//1
//2

//do while loops loop on exit
let counter2 = 0;
do {
    console.log(counter2);
    counter2 += 1;  
} while(counter2 < 1)
//0`;

const iterationsContent: CardContent[] = [{
    text: 'For Loop',
    code: forCode,
}, {
    text: 'For Each',
    code: forEachCode,
}, {
    text: 'For In',
    code: forInCode,
}, {
    text: 'While',
    code: whileCode,
}];

export default iterationsContent;
