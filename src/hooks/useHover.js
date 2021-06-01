import {useCallback, useMemo, useState} from 'react';

const useHover = () => {
    const [isHovered, setHovered] = useState(false);

    const mouseOver = useCallback((e) => {
        if (e.currentTarget.contains(e.relatedTarget)) {
            return;
        }
        setHovered(true);
    }, []);

    const mouseOut = useCallback((e) => {
        if (e.currentTarget.contains(e.relatedTarget)) {
            return;
        }
        setHovered(false);
    }, []);

    return useMemo(() => ({
        mouseOver,
        mouseOut,
        isHovered
    }), [isHovered, mouseOut, mouseOver]);
};

export default useHover;
