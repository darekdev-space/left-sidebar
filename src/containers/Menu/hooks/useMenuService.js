import {useCallback, useEffect, useMemo, useState} from 'react';
import {isEqual} from 'underscore';

import prepareMenu, {getChildrenPaths} from '../helpers/menuHelpers';

import axiosMock from '../../../mock/mockService';

const useMenuService = (staticMenu, isHovered) => {
    const [menu, setMenu] = useState(prepareMenu(staticMenu || {}));

    const toggleExpandLevel = useCallback((path) => {
        const isCollapse = menu[path].isExpand;
        const childrenPaths = getChildrenPaths(menu, path, isCollapse);

        const nextChildren = childrenPaths.reduce((updatedChildren, childPath) => {
            return {
                ...updatedChildren,
                [childPath]: {
                    ...menu[childPath],
                    isVisible: !menu[childPath].isVisible,
                    ...(isCollapse ? {isExpand: false} : {})
                }
            };
        }, {});

        const nextParent = {
            [path]: {
                ...menu[path],
                isExpand: !menu[path].isExpand
            }
        };

        setMenu({...menu, ...nextChildren, ...nextParent});
    }, [menu]);

    const collapseAllLevels = useCallback(() => {
        return Object.entries(menu)
            .reduce((collapsedMenu, [path, item]) => {
                return {
                    ...collapsedMenu,
                    [path]: {
                        ...item,
                        isExpand: false,
                        isVisible: !path.includes('.')
                    }
                };
            }, {});
    }, [menu]);

    const fetchMenu = async () => {
        try {
            const {data} = await axiosMock();
            setMenu(prepareMenu(data));
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e.toString());
        }
    };

    useEffect(() => {
        if (!isHovered) {
            const nextMenu = collapseAllLevels();
            setMenu(prevMenu => (isEqual(prevMenu, nextMenu) ? prevMenu : nextMenu));
        }
    }, [collapseAllLevels, isHovered]);

    useEffect(() => {
        if (!staticMenu) {
            fetchMenu()
                .then();
        }
    }, [staticMenu]);

    return useMemo(() => ({
        menu,
        toggleExpandLevel
    }), [menu, toggleExpandLevel]);
};

export default useMenuService;
