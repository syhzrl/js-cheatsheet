import React, { FunctionComponent } from 'react';

interface NavMenuButtonProps {
    label: string;
}

const NavMenuButton: FunctionComponent<NavMenuButtonProps> = (props: NavMenuButtonProps) => {
    const { label } = props;

    return (
        <button
            type='button'
            className='bg-transparent p-3 hover:bg-[#dec91b] hover:text-bgPrimary transition-all duration-500 text-xl font-bold rounded-lg w-full'
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
        <div className='bg-[#1e1d1d] text-white w-1/5 sticky top-0 flex flex-col items-center space-y-1 h-screen'>
            <div className='text-jsYellow p-4 flex justify-center items-center w-full text-xl font-bold'>
                Javascript Cheatsheet
            </div>

            <div className='p-4 flex flex-col space-y-3'>
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
