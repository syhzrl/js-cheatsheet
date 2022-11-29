import React, { FunctionComponent } from 'react';
import { motion } from 'framer-motion';

interface KeyboardShortcut {
    key: string;
    desc: string;
}

const shortcuts: KeyboardShortcut[] = [{
    key: 'Alt + 1',
    desc: 'Scroll to Functions section',
}, {
    key: 'Alt + 2',
    desc: 'Scroll to Variables section',
}, {
    key: 'Alt + 3',
    desc: 'Scroll to Strings section',
}, {
    key: 'Alt + 4',
    desc: 'Scroll to Numbers section',
}, {
    key: 'Alt + Q',
    desc: 'Scroll to Arrays section',
}, {
    key: 'Alt + W',
    desc: 'Scroll to Objects section',
}, {
    key: 'Alt + E',
    desc: 'Scroll to Conditionals section',
}, {
    key: 'Alt + R',
    desc: 'Scroll to Iterations section',
}, {
    key: 'Alt + D',
    desc: 'Scroll to Date section',
}, {
    key: 'Alt + K',
    desc: 'Toggle this modal',
}, {
    key: 'Esc',
    desc: 'Close this modal',
}];

interface KeyboardShortcutModalProps {
    onBackdropClick: (state: boolean) => void;
}

const KeyboardShortcutModal: FunctionComponent<KeyboardShortcutModalProps> = (props: KeyboardShortcutModalProps) => {
    const { onBackdropClick } = props;

    const dropIn = {
        hidden: {
            y: '-100vh',
            opacity: 0,
        },
        visible: {
            y: '0',
            opacity: 1,
            transition: {
                duration: 0.1,
                type: 'spring',
                damping: 25,
                stiffness: 500,
            },
        },
        exit: {
            y: '-100vh',
            opacity: 0,
        },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onBackdropClick(false)}
            className='fixed top-0 left-0 h-screen w-screen bg-bgSecondary/40 flex items-center justify-center'
        >
            <motion.div
                variants={dropIn}
                initial='hidden'
                animate='visible'
                exit='exit'
                className='bg-bgSecondary flex flex-col items-center justify-center text-white p-5 rounded-md gap-5 w-1/2'
            >
                <p className='text-2xl'>Keyboard Shortcuts</p>

                <div className='flex flex-col text-xl w-4/5 gap-2'>
                    {shortcuts.map(item => {
                        const { key, desc } = item;

                        return (
                            <div key={key} className='flex justify-center'>
                                <p className='w-6/12 text-center'>{key}</p>
                                <p className='w-6/12'>{desc}</p>
                            </div>
                        );
                    })}
                </div>

            </motion.div>
        </motion.div>
    );
};

export default KeyboardShortcutModal;
