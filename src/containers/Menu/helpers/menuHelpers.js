export const getChildrenPaths = (menu, parentPath, recursive = false) => {
    return Object.keys(menu || {})
        .filter((path) => {
            if (path === parentPath) {
                return false;
            }

            return path.startsWith(parentPath) && (recursive || path.length === parentPath.length + 2);
        });
};

export const getPath = (path, index) => {
    if (path) {
        return `${path}.${index + 1}`;
    }

    return String(index + 1);
};

export const createFlatStructure = (items, path = '') => {
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
                ...createFlatStructure(subItems, nextPath)
            };
        }

        return {
            ...flatStructure,
            [getPath(path, idx)]: nextItem
        };
    }, {});
};

export const prepareMenu = ({menuItems = []} = {}) => {
    if (!menuItems?.length) {
        return {};
    }

    return createFlatStructure(menuItems);
};
