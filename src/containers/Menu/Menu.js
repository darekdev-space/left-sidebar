import React, {useMemo} from 'react';
import cx from 'classnames';

import useMenuService from './hooks/useMenuService';
import useHover from '../../hooks/useHover';
import MenuContext from './contextAPI/MenuContext';

import './sass/Menu.sass';

import Header from '../../components/Menu/Header/Header';
import MenuList from '../../components/Menu/MenuList/MenuList';
import Footer from '../../components/Menu/Footer/Footer';

const Menu = () => {
    const {
        isHovered,
        mouseOut,
        mouseOver
    } = useHover();

    const {
        menu,
        toggleExpandLevel
    } = useMenuService(null, isHovered);

    const getAPI = useMemo(() => ({
        isExtended: isHovered
    }), [isHovered]);

    const classNames = cx('menu', {isExtended: isHovered});

    return (
        <MenuContext.Provider value={getAPI}>
            <div
                className={classNames}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
                onFocus={mouseOver}
                onBlur={mouseOut}
            >
                <Header portalName="Some Portal"/>
                <MenuList toggleExpandLevel={toggleExpandLevel} menu={menu}/>
                <Footer/>
            </div>
        </MenuContext.Provider>
    );
};

export default Menu;
