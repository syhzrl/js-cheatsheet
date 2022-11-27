import React, { FunctionComponent, useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { RefsContext } from 'context/Refs';

import useKeyPress from 'hooks/useKeyPress';

import contents from 'assets/contents';
import KeyboardIcon from 'assets/icons/keyboard.svg';

import NavMenu from 'components/NavMenu';
import Card from 'components/Card';
import KeyboardShortcutModal from 'components/KeyboardShortcutModal';

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

                <div className='w-full grid grid-cols-2 p-20 gap-5'>
                    {contents.map(item => {
                        const { title, desc, content } = item;

                        return (
                            <Card
                                key={title}
                                title={title}
                                desc={desc}
                                content={content}
                            />
                        );
                    })}
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
