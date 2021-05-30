import React from 'react';

import './sass/Menu.sass';

import Header from '../../components/Menu/Header/Header';
import MenuList from '../../components/Menu/MenuList/MenuList';
import Footer from '../../components/Menu/Footer/Footer';

import useMenuService from './hooks/useMenuService';

const Menu = () => {
    const menu = useMenuService();

    return (
        <div className="menu">
            <Header portalName="Some Portal"/>
            <MenuList menu={menu}/>
            <Footer/>
        </div>
    );
};

export default Menu;
