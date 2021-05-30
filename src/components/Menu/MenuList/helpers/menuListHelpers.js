const getVisibleItems = (menu) => {
    return Object.entries(menu).filter(([, item]) => {
        return item.isVisible;
    });
};

export default getVisibleItems;
