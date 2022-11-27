import React, { FunctionComponent } from 'react';
import JsIcon from 'assets/icons/js.svg';

interface NavMenuButtonProps {
    label: string;
}

const NavMenuButton: FunctionComponent<NavMenuButtonProps> = (props: NavMenuButtonProps) => {
    const { label } = props;

    return (
        <button
            type='button'
            className='bg-transparent p-2 hover:bg-[#dec91b] hover:text-bgPrimary transition-all duration-300 text-xl rounded-lg w-full'
        >
            <p>
                {label}
            </p>
        </button>
    );
};

const NavMenu: FunctionComponent = () => {
    const navMenuButtonsLabel = [
        'Data Types',
        'Variables',
        'String Methods',
        'Number Methods',
        'Array Methods',
        'Object Methods',
        'Loops',
        'Conditions',
        'Conditional Statements',
    ];

    return (
        <div className='bg-[#1e1d1d] text-white w-1/5 sticky top-0 flex flex-col items-center h-screen'>
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

            <div className='p-4 flex flex-col space-y-2'>
                {navMenuButtonsLabel.map(item => {
                    return (
                        <NavMenuButton key={item} label={item} />
                    );
                })}
            </div>
        </div>
    );
};

export default NavMenu;
