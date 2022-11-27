import { useCallback, useEffect, useRef } from 'react';

const useKeyPress = (keys: string[], callback: (event: KeyboardEvent) => void, node = null): void => {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callbackRef, callback]);

    const handleKeyPress = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                callbackRef.current(event);
            }

            if (event.ctrlKey) {
                if (keys.some((key: string) => event.key === key)) {
                    event.preventDefault();
                    callbackRef.current(event);
                }
            }
        },
        [keys],
    );

    useEffect(() => {
        const targetNode = node ?? document;

        if (targetNode) {
            targetNode.addEventListener('keydown', handleKeyPress);
        }

        return () =>
            targetNode
            && targetNode.removeEventListener('keydown', handleKeyPress);
    }, [handleKeyPress, node]);
};

export default useKeyPress;
