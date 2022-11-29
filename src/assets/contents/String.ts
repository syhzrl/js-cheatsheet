import { CardContent } from 'entity/Card';

const mutatingCode = `//these methods returns a new string

const text = 'Topgun Maverick';

//slice(start, end)
text.slice(6); //Maverick

//substring(start, end)
text.substring(0, 6); //Topgun

//replace(stringToReplace, replacement)
text.replace('Maverick', 'Rooster'); //Topgun Rooster

//concat
text.concat('✈'); //Topgun Maverick✈

//split ( returns an array )
text.split(' '); //['Topgun', 'Maverick'];

//toUpperCase & toLowerCase
text.toLowerCase(); //topgun maverick
text.toUpperCase(); //TOPGUN MAVERICK

//trimming
const text = '    Pilot    ';
text.trim(); //Pilot
text.trimStart(); //"Pilot    "
text.trimEnd(); //"    Pilot"

//padding
text.padStart(4, 'x'); //xxxTopgun Maverick
text.padEnd(4, 'x'); //Topgun Maverickxxx`;

const extrasCode = `const text = 'Topgun Maverick';

//length
text.length; //15

//charAt & charCodeAt
text.charAt(4); //u
text.charCodeAt(4); //117`;

const stringContent: CardContent[] = [{
    text: 'Mutations',
    code: mutatingCode,
}, {
    text: 'Extras',
    code: extrasCode,
}];

export default stringContent;
