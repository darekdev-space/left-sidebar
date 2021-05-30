import {useEffect, useState} from 'react';
import getVisibleItems from '../helpers/menuListHelpers';

const useMenuLogic = (menu) => {
    const [visibleItems, setVisibleItems] = useState([]);

    // add usePrevious

    useEffect(() => {
        if (Object.keys(menu || {}).length) {
            setVisibleItems(getVisibleItems(menu));
        }
    }, [menu]);

    return {visibleItems};
};

export default useMenuLogic;
