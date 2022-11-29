import React, { FunctionComponent, useContext, useState, useEffect } from 'react';

import { RefsContext } from 'context/Refs';

import JsIcon from 'assets/icons/js.svg';
import VariableIcon from 'assets/icons/variable.svg';
import FunctionIcon from 'assets/icons/function.svg';
import StringIcon from 'assets/icons/string.svg';
import NumberIcon from 'assets/icons/arithmetics.svg';
import ArrayIcon from 'assets/icons/array.svg';
import ObjectIcon from 'assets/icons/object.svg';
import OperatorIcon from 'assets/icons/operator.svg';
import IterationIcon from 'assets/icons/refresh.svg';
import DateIcon from 'assets/icons/date.svg';

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
        arrRef,
        objRef,
        opRef,
        iteRef,
        dateRef,
    } = useContext(RefsContext);

    const [ref, setRef] = useState<React.MutableRefObject<HTMLDivElement | null>>();

    useEffect(() => {
        switch (label) {
            case 'Variables': setRef(varRef); break;
            case 'Functions': setRef(funcRef); break;
            case 'Strings': setRef(stringRef); break;
            case 'Numbers': setRef(numRef); break;
            case 'Arrays': setRef(arrRef); break;
            case 'Objects': setRef(objRef); break;
            case 'Conditionals': setRef(opRef); break;
            case 'Iterations': setRef(iteRef); break;
            case 'Date': setRef(dateRef); break;
            default:
        }
    }, [label, varRef, funcRef, stringRef, numRef, arrRef, objRef, opRef, iteRef, dateRef]);

    const renderIcon = () => {
        switch (label) {
            case 'Variables': return <VariableIcon />;
            case 'Functions': return <FunctionIcon />;
            case 'Strings': return <StringIcon />;
            case 'Numbers': return <NumberIcon />;
            case 'Arrays': return <ArrayIcon />;
            case 'Objects': return <ObjectIcon />;
            case 'Conditionals': return <OperatorIcon />;
            case 'Iterations': return <IterationIcon />;
            case 'Date': return <DateIcon />;
            default: return <FunctionIcon />;
        }
    };

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
            className='p-2 hover:bg-jsYellow hover:text-bgPrimary transition-all duration-300 text-xl rounded-md w-full flex items-center justify-start gap-2'
            onClick={onClickHandler}
        >
            {renderIcon()}
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
        'Strings',
        'Numbers',
        'Arrays',
        'Objects',
        'Conditionals',
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
