import React, { createContext, useState, FunctionComponent, useMemo } from 'react';

interface RefsContextInterface {
    varRef: React.MutableRefObject<HTMLDivElement | null> | undefined
    setVarRef: (ref: React.MutableRefObject<HTMLDivElement | null>) => void;

    funcRef: React.MutableRefObject<HTMLDivElement | null> | undefined
    setFuncRef: (ref: React.MutableRefObject<HTMLDivElement | null>) => void;

    stringRef: React.MutableRefObject<HTMLDivElement | null> | undefined
    setStringRef: (ref: React.MutableRefObject<HTMLDivElement | null>) => void;

    numRef: React.MutableRefObject<HTMLDivElement | null> | undefined
    setNumRef: (ref: React.MutableRefObject<HTMLDivElement | null>) => void;
}

const initialState: RefsContextInterface = {
    varRef: undefined,
    setVarRef: () => null,

    funcRef: undefined,
    setFuncRef: () => null,

    stringRef: undefined,
    setStringRef: () => null,

    numRef: undefined,
    setNumRef: () => null,
};

export const RefsContext = createContext<RefsContextInterface>(initialState);

interface RefsProviderProps {
    children: React.ReactNode;
}

const RefsProvider: FunctionComponent<RefsProviderProps> = (props: RefsProviderProps) => {
    const { children } = props;

    const [varRef, setVarRef] = useState<React.MutableRefObject<HTMLDivElement | null>>();
    const [funcRef, setFuncRef] = useState<React.MutableRefObject<HTMLDivElement | null>>();
    const [stringRef, setStringRef] = useState<React.MutableRefObject<HTMLDivElement | null>>();
    const [numRef, setNumRef] = useState<React.MutableRefObject<HTMLDivElement | null>>();

    const memoValue: RefsContextInterface = useMemo(() => ({
        varRef,
        setVarRef,

        funcRef,
        setFuncRef,

        stringRef,
        setStringRef,

        numRef,
        setNumRef,
    }), [
        varRef,
        setVarRef,

        funcRef,
        setFuncRef,

        stringRef,
        setStringRef,

        numRef,
        setNumRef,
    ]);

    return (
        <RefsContext.Provider value={memoValue}>
            {children}
        </RefsContext.Provider>
    );
};

export default RefsProvider;
