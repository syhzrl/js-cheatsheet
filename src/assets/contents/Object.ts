import { CardContent } from 'entity/Card';

const keysValueCode = `const user = {
    name: 'Chris',
}

user.name; //'Chris'
user['name']; //'Chris'

Object.keys(user); //['name']
Object.values(user); //['Chris']
Object.entries(user); //[['name','Chris']]`;

const objectsContent: CardContent[] = [{
    text: 'Object.keys, values, entries',
    code: keysValueCode,
}];

export default objectsContent;
