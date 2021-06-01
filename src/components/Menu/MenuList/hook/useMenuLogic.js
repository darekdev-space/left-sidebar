import {useEffect, useMemo, useState} from 'react';
import {isEqual} from 'underscore';

import getVisibleItems from '../helpers/menuListHelpers';
import usePrevious from '../../../../hooks/usePrevious';

const useMenuVisibility = (menu) => {
    const [visibleItems, setVisibleItems] = useState([]);

    const prevMenu = usePrevious(menu);

    const sortByPath = (items) => {
        return items.sort(([pathA], [pathB]) => {
            return pathA.localeCompare(pathB, {}, {numeric: true});
        });
    };

    useEffect(() => {
        if (Object.keys(menu || {}).length && !isEqual(prevMenu, menu)) {
            setVisibleItems(sortByPath(getVisibleItems(menu)));
        }
    }, [menu, prevMenu]);

    return useMemo(() => ({visibleItems}), [visibleItems]);
};

export default useMenuVisibility;
