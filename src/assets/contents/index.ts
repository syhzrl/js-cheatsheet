import { CardContent } from 'entity/Card';

import variablesContent from './Variables';
import functionsContent from './Functions';
import stringContent from './String';

interface Content {
    title: string;
    desc: string;
    content: CardContent[];
}

const contents: Content[] = [{
    title: 'Functions',
    desc: 'Functions can be declared in 2 ways',
    content: functionsContent,
},
{
    title: 'Variables',
    desc: 'Variables can be declared in 2 ways',
    content: variablesContent,
},
{
    title: 'String Methods',
    desc: 'Strings can be manipulated with different methods',
    content: stringContent,
}];

export default contents;
