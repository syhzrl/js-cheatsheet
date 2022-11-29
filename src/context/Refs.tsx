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

    arrRef: React.MutableRefObject<HTMLDivElement | null> | undefined
    setArrRef: (ref: React.MutableRefObject<HTMLDivElement | null>) => void;

    objRef: React.MutableRefObject<HTMLDivElement | null> | undefined
    setObjRef: (ref: React.MutableRefObject<HTMLDivElement | null>) => void;

    opRef: React.MutableRefObject<HTMLDivElement | null> | undefined
    setOpRef: (ref: React.MutableRefObject<HTMLDivElement | null>) => void;

    iteRef: React.MutableRefObject<HTMLDivElement | null> | undefined
    setIteRef: (ref: React.MutableRefObject<HTMLDivElement | null>) => void;

    dateRef: React.MutableRefObject<HTMLDivElement | null> | undefined
    setDateRef: (ref: React.MutableRefObject<HTMLDivElement | null>) => void;
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

    arrRef: undefined,
    setArrRef: () => null,

    objRef: undefined,
    setObjRef: () => null,

    opRef: undefined,
    setOpRef: () => null,

    iteRef: undefined,
    setIteRef: () => null,

    dateRef: undefined,
    setDateRef: () => null,
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

    const [arrRef, setArrRef] = useState<React.MutableRefObject<HTMLDivElement | null>>();
    const [objRef, setObjRef] = useState<React.MutableRefObject<HTMLDivElement | null>>();
    const [opRef, setOpRef] = useState<React.MutableRefObject<HTMLDivElement | null>>();
    const [iteRef, setIteRef] = useState<React.MutableRefObject<HTMLDivElement | null>>();
    const [dateRef, setDateRef] = useState<React.MutableRefObject<HTMLDivElement | null>>();

    const memoValue: RefsContextInterface = useMemo(() => ({
        varRef,
        setVarRef,

        funcRef,
        setFuncRef,

        stringRef,
        setStringRef,

        numRef,
        setNumRef,

        arrRef,
        setArrRef,

        objRef,
        setObjRef,

        opRef,
        setOpRef,

        iteRef,
        setIteRef,

        dateRef,
        setDateRef,
    }), [
        varRef,
        setVarRef,

        funcRef,
        setFuncRef,

        stringRef,
        setStringRef,

        numRef,
        setNumRef,

        arrRef,
        setArrRef,

        objRef,
        setObjRef,

        opRef,
        setOpRef,

        iteRef,
        setIteRef,

        dateRef,
        setDateRef,
    ]);

    return (
        <RefsContext.Provider value={memoValue}>
            {children}
        </RefsContext.Provider>
    );
};

export default RefsProvider;
