import React, { FunctionComponent, useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { RefsContext } from 'context/Refs';

import useKeyPress from 'hooks/useKeyPress';

import KeyboardIcon from 'assets/icons/keyboard.svg';
import variablesContent from 'assets/contents/Variables';
import functionsContent from 'assets/contents/Functions';
import stringContent from 'assets/contents/String';
import numbersContent from 'assets/contents/Number';

import NavMenu from 'components/NavMenu';
import Card from 'components/Card';
import KeyboardShortcutModal from 'components/KeyboardShortcutModal';
import arraysContent from 'assets/contents/Array';
import objectsContent from 'assets/contents/Object';
import operatorsContent from 'assets/contents/Operators';

const DashboardScreen: FunctionComponent = () => {
    const {
        varRef,
        funcRef,
        stringRef,
        numRef,
    } = useContext(RefsContext);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const onKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'v') {
            if (varRef) {
                if (varRef.current) {
                    varRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }

        if (event.key === 'f') {
            if (funcRef) {
                if (funcRef.current) {
                    funcRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }

        if (event.key === 's') {
            if (stringRef) {
                if (stringRef.current) {
                    stringRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }

        if (event.key === 'm') {
            if (numRef) {
                if (numRef.current) {
                    numRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }

        if (event.key === 'k') {
            setIsModalOpen(!isModalOpen);
        }

        if (event.key === 'Escape') {
            setIsModalOpen(false);
        }
    };

    useKeyPress(['v', 'f', 's', 'm', 'k'], onKeyPress);

    return (
        <div className='bg-bgPrimary text-white h-full'>
            <div className='fixed top-0 right-0 p-3'>
                <motion.button
                    type='button'
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setIsModalOpen(true)}
                    className='bg-bgSecondary p-2 rounded-md'
                >
                    <KeyboardIcon
                        height={20}
                        width={20}
                    />
                </motion.button>
            </div>

            <div className='flex'>
                <NavMenu />

                <div className='flex w-full p-5 gap-5 justify-center'>
                    <div className='flex flex-col gap-5'>
                        <Card
                            title='Variables'
                            desc='Variables can be declared in 2 ways'
                            content={variablesContent}
                        />

                        <Card
                            title='String Methods'
                            desc='Strings can be manipulated with a few different methods'
                            content={stringContent}
                        />

                        <Card
                            title='Array Methods'
                            desc='Array can be manipulated with a few different methods'
                            content={arraysContent}
                        />
                    </div>

                    <div className='flex flex-col gap-5'>

                        <Card
                            title='Functions'
                            desc='Variables can be declared in 2 ways'
                            content={functionsContent}
                        />

                        <Card
                            title='Number Methods'
                            desc='Numbers can be manipulated with a few different methods'
                            content={numbersContent}
                        />

                        <Card
                            title='Object Methods'
                            desc='Objects can be accessed with a few different methods'
                            content={objectsContent}
                        />

                        <Card
                            title='Operators & Conditionals'
                            desc='Javascript introduces a few operators and conditional statements'
                            content={operatorsContent}
                        />
                    </div>
                </div>

            </div>

            <AnimatePresence
                initial={false}
                mode='wait'
                onExitComplete={() => null}
            >
                {isModalOpen && <KeyboardShortcutModal onBackdropClick={setIsModalOpen} />}
            </AnimatePresence>
        </div>
    );
};

export default DashboardScreen;
