import { CardContent } from 'entity/Card';

import variablesContent from './Variables';
import functionsContent from './Functions';

interface Content {
    title: string;
    desc: string;
    content: CardContent[];
}

const contents: Content[] = [{
    title: 'Variables',
    desc: 'Variables can be declared in 2 ways',
    content: variablesContent,
}, {
    title: 'Functions',
    desc: 'Functions can be declared in 2 ways',
    content: functionsContent,
}];

export default contents;
