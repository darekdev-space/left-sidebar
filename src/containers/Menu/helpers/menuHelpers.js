export const getChildrenPaths = (menu, parentPath, recursive = false) => {
    return Object.keys(menu || {})
        .filter((path) => {
            return path.startsWith(parentPath) && (recursive || path.length === parentPath.length + 2);
        });
};

const getPath = (path, index) => {
    if (path) {
        return `${path}.${index + 1}`;
    }

    return String(index + 1);
};

const creatFlatStructure = (items, path = '') => {
    return (items || []).reduce((flatStructure, {
        subItems,
        ...rest
    }, idx) => {
        const nextPath = getPath(path, idx);

        const nextItem = {
            ...rest,
            hasChildren: !!subItems?.length || false,
            isVisible: !nextPath.includes('.'),
            isActive: false,
            isExpand: false
        };

        if (subItems?.length) {
            return {
                ...flatStructure,
                [nextPath]: nextItem,
                ...creatFlatStructure(subItems, nextPath)
            };
        }

        return {
            ...flatStructure,
            [getPath(path, idx)]: nextItem
        };
    }, {});
};

export const collapseAllLevels = (menu) => {
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
};

const prepareMenu = ({menuItems} = []) => {
    if (!menuItems?.length) {
        return {};
    }

    return creatFlatStructure(menuItems);
};

export default prepareMenu;
