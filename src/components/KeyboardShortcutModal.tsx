import React, { FunctionComponent, Fragment } from 'react';
import { motion } from 'framer-motion';

interface KeyboardShortcut {
    key: string;
    desc: string;
}

const shortcuts: KeyboardShortcut[] = [{
    key: 'Ctrl + F',
    desc: 'Scroll to Functions section',
}, {
    key: 'Ctrl + V',
    desc: 'Scroll to Variables section',
}, {
    key: 'Ctrl + S',
    desc: 'Scroll to String Methods section',
}, {
    key: 'Ctrl + M',
    desc: 'Scroll to Number Methods section',
}, {
    key: 'Ctrl + K',
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
                className='bg-bgSecondary flex flex-col items-center justify-center text-white p-5 rounded-md gap-5'
            >
                <p className='text-2xl'>Keyboard Shortcuts</p>

                <div className='grid grid-cols-2 gap-5 text-xl w-4/5'>
                    {shortcuts.map(item => {
                        const { key, desc } = item;

                        return (
                            <Fragment key={key}>
                                <p>{key}</p>
                                <p>{desc}</p>
                            </Fragment>
                        );
                    })}
                </div>

            </motion.div>
        </motion.div>
    );
};

export default KeyboardShortcutModal;
