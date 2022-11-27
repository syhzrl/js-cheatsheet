import { CardContent } from 'entity/Card';

import variablesContent from './Variables';

interface Content {
    title: string;
    desc: string;
    content: CardContent[];
}

const contents: Content[] = [{
    title: 'Variables',
    desc: 'Variables are declared using the keyword const for static variables and let for mutable variables.',
    content: variablesContent,
}];

export default contents;
