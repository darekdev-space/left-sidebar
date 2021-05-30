const getPath = (path, index) => {
    if (path) {
        return `${path}.${index + 1}`;
    }

    return String(index + 1);
};

const creatFlatStructure = (items, path = '') => {
    return (items || []).reduce((flatStructure, {subItems, ...rest}, idx) => {
        const nextPath = getPath(path, idx);

        const nextItem = {
            ...rest,
            hasChild: !!subItems?.length || false,
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

const prepareMenu = ({menuItems} = []) => {
    if (!menuItems?.length) {
        return [];
    }

    return creatFlatStructure(menuItems);
};

export default prepareMenu;
