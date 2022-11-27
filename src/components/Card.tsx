import React, { FunctionComponent } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import CopyIcon from 'assets/icons/copy.svg';

import { CardContent } from 'entity/Card';

interface CardContentProps {
    title: string;
    code: string;
}

const CardContent: FunctionComponent<CardContentProps> = (props: CardContentProps) => {
    const { title, code } = props;
    return (
        <div className='flex flex-col gap-1'>
            <div className='w-full text-lg flex justify-between'>
                <p>
                    {title}
                </p>

                <button
                    type='button'
                    onClick={() => navigator.clipboard.writeText(code)}
                >
                    <CopyIcon />
                </button>
            </div>

            <SyntaxHighlighter
                language='typescript'
                style={vs2015}
                showLineNumbers
                customStyle={{
                    backgroundColor: '#323031',
                    width: '100%',
                    margin: 0,
                    display: 'flex',
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

interface CardProps {
    title: string;
    desc: string;
    content: CardContent[];
}

const Card: FunctionComponent<CardProps> = (props: CardProps) => {
    const { title, desc, content } = props;

    return (
        <div className=''>
            <div className='bg-bgSecondary rounded-t-md w-fit px-5 py-1 text-xl'>
                {title}
            </div>

            <div className='bg-bgSecondary flex flex-col items-center rounded-b-md rounded-tr-md p-4 space-y-3'>
                <div className='w-full text-lg'>
                    {desc}
                </div>

                <div className='flex flex-col space-y-5 w-full'>
                    {content.map(item => {
                        const { text, code } = item;
                        return (
                            <CardContent
                                key={text}
                                title={text}
                                code={code}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Card;