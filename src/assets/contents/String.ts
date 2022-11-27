import { CardContent } from 'entity/Card';

const lengthCode = `const name='Bob Jenkins';
console.log(name.length); //11`;

const sliceCode = `//slice(start, end)
const text = 'Apple, Banana, Kiwi';
console.log(text.slice(7)); //Banana, Kiwi `;

const subStringCode = `const text = 'Apple, Banana, Kiwi';
console.log(str.substring(7, 13)); //Banana`;

const replaceCode = `const text = 'I live in Japan';
const newText = text.replace('Japan', 'Malaysia');
console.log(newText); //I live in Malaysia`;

const upperLowerCode = `const text = 'Topgun Maverick';
console.log(text.toLowerCase()); //topgun maverick
console.log(text.toUpperCase()); //TOPGUN MAVERICK`;

const concatCode = `const text1 = 'Topgun';
const text2 = 'Maverick';
console.log(text1.concat(' ', text2)); //Topgun Maverick`;

const trimCode = `const text = '    Astronaut    ';
console.log(text.trim()); //Astronaut
console.log(text.trimStart()); //"Astronaut    "
console.log(text.trimEnd()); //"    Astronaut"`;

const padCode = `const text = 'Coffee';
console.log(text.padStart(4, 'x')); //xxxCoffee
console.log(text.padEnd(4, 'x')); //Coffeexxx`;

const charCode = `const text = "Anime Fan";
console.log(text.charAt(4)) //e;
console.log(text.charCodeAt(4)) //101;`;

const splitCode = `const text = "Split, String";
console.log(text.split(', ')); //["Split", " String"]`;

const stringContent: CardContent[] = [{
    text: 'Length',
    code: lengthCode,
},
{
    text: 'Slice',
    code: sliceCode,
},
{
    text: 'Substring',
    code: subStringCode,
},
{
    text: 'Replace',
    code: replaceCode,
},
{
    text: 'To Lower Case & To Upper Case',
    code: upperLowerCode,
},
{
    text: 'Concat',
    code: concatCode,
},
{
    text: 'Trim, Trim Start & Trim End',
    code: trimCode,
},
{
    text: 'Pad Start & Pad End',
    code: padCode,
},
{
    text: 'Char At & Char Code At',
    code: charCode,
},
{
    text: 'Split',
    code: splitCode,
}];

export default stringContent;
