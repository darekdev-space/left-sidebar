import React, {memo, useCallback, useRef} from 'react';
import PropTypes from 'prop-types';
import {Scrollbars} from 'react-custom-scrollbars-2';
import {AutoSizer, List} from 'react-virtualized';
import {withRouter} from 'react-router-dom';

import useMenuVisibility from './hook/useMenuLogic';

import './sass/MenuList.sass';

import MenuItem from '../MenuItem/MenuItem';

const EnhancedMenuItem = withRouter(memo(MenuItem));

const listStyle = {
    overflowX: false,
    overflowY: false
};
const ITEM_WIDTH = 45;

const MenuList = (props) => {
    const {
        menu,
        toggleExpandLevel
    } = props;

    const menuListRef = useRef(null);
    const {visibleItems} = useMenuVisibility(menu);

    const handleScroll = useCallback((e) => {
        const {
            scrollTop,
            scrollLeft
        } = e.target;
        const {Grid} = menuListRef.current;
        Grid.handleScrollEvent({
            scrollTop,
            scrollLeft
        });
    }, []);

    const renderMenuItem = ({
        index,
        style
    }) => {
        const [path, {
            subItem,
            ...rest
        }] = visibleItems[index];

        return (
            <EnhancedMenuItem
                key={path}
                style={style}
                path={path}
                toggleExpandLevel={toggleExpandLevel}
                {...rest}
            />
        );
    };

    const renderMenuList = (width, height) => {
        return (
            <Scrollbars
                onScroll={handleScroll}
                style={{
                    height,
                    width
                }}
                autoHide
            >
                <List
                    height={height}
                    width={width}
                    rowHeight={ITEM_WIDTH}
                    rowRenderer={renderMenuItem}
                    style={listStyle}
                    ref={menuListRef}
                    rowCount={visibleItems.length}
                />
            </Scrollbars>
        );
    };

    return (
        <div className="menu__list">
            <AutoSizer>
                {({
                    width,
                    height
                }) => renderMenuList(width, height)}
            </AutoSizer>
        </div>
    );
};

MenuList.propTypes = {
    menu: PropTypes.shape({}),
    toggleExpandLevel: PropTypes.func
};

export default MenuList;
