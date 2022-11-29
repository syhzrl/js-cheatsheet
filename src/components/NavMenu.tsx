import React, { FunctionComponent, useContext, useState, useEffect } from 'react';

import { RefsContext } from 'context/Refs';

import JsIcon from 'assets/icons/js.svg';

import packageJson from '../../package.json';

interface NavMenuButtonProps {
    label: string;
}

const NavMenuButton: FunctionComponent<NavMenuButtonProps> = (props: NavMenuButtonProps) => {
    const { label } = props;

    const {
        varRef,
        funcRef,
        stringRef,
        numRef,
    } = useContext(RefsContext);

    const [ref, setRef] = useState<React.MutableRefObject<HTMLDivElement | null>>();

    useEffect(() => {
        switch (label) {
            case 'Variables': setRef(varRef); break;
            case 'Functions': setRef(funcRef); break;
            case 'String Methods': setRef(stringRef); break;
            case 'Number Methods': setRef(numRef); break;
            default:
        }
    }, [label, varRef, funcRef, stringRef, numRef]);

    const onClickHandler = () => {
        if (ref) {
            if (ref.current) {
                ref.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <button
            type='button'
            className='p-2 hover:bg-jsYellow hover:text-bgPrimary transition-all duration-300 text-xl rounded-md w-full'
            onClick={onClickHandler}
        >
            <p>
                {label}
            </p>
        </button>
    );
};

const NavMenu: FunctionComponent = () => {
    const navMenuButtonsLabel = [
        'Variables',
        'Functions',
        'String Methods',
        'Number Methods',
        'Array Methods',
        'Object Methods',
        'Operators & Conditionals',
        'Iterations',
        'Date',
    ];

    return (
        <div className='bg-bgSecondary text-white w-1/5 sticky top-0 flex flex-col items-center justify-between h-screen'>
            <div>
                <div className='text-jsYellow p-4 text-2xl flex flex-col justify-center items-center w-full space-y-3'>
                    <div className='flex justify-center items-end space-x-3'>
                        <JsIcon
                            height={40}
                            width={40}
                        />

                        <p>
                            Cheatsheet
                        </p>
                    </div>

                    <div className='w-full border-b border-jsYellow' />
                </div>

                <div className='p-4 flex flex-col space-y-3'>
                    {navMenuButtonsLabel.map(item => {
                        return (
                            <NavMenuButton key={item} label={item} />
                        );
                    })}
                </div>
            </div>

            <p className='text-white/20 mb-2'>
                {`v.${packageJson.version}`}
            </p>
        </div>
    );
};

export default NavMenu;
