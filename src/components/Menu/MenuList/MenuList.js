import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {AutoSizer, List} from 'react-virtualized';

import './sass/MenuList.sass';
import useMenuLogic from './hook/useMenuLogic';
import MenuItem from '../MenuItem/MenuItem';

const listStyle = {overflowX: false, overflowY: false};
const ITEM_WIDTH = 35;

const MenuList = (props) => {
    const {menu} = props;

    const menuListRef = useRef(null);
    const {visibleItems} = useMenuLogic(menu);

    const renderMenuItem = ({index, style}) => {
        const [path, item] = visibleItems[index];
        const {id, url, label} = item;

        return (
            <MenuItem
                key={path}
                id={id}
                url={url}
                label={label}
                style={style}
                path={path}
            />
        );
    };

    const renderMenuList = (width, height) => {
        return (
            <List
                height={height}
                width={width}
                rowHeight={ITEM_WIDTH}
                rowRenderer={renderMenuItem}
                style={listStyle}
                ref={menuListRef}
                rowCount={visibleItems.length}
            />
        );
    };

    return (
        <div className="menu__list">
            <AutoSizer>
                {({width, height}) => renderMenuList(width, height)}
            </AutoSizer>
        </div>
    );
};

MenuList.propTypes = {
    menu: PropTypes.shape({})
};

export default MenuList;
