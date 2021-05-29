import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './sass/Header.sass';

const Header = () => {
    return (
        <header className="menu__header">
            <div className="menu__header__logo">
                <FontAwesomeIcon icon="meteor" size="3x"/>
            </div>
            <div className="menu__header__title">
                <p>Some portal</p>
                <p>Cosmos AppShell</p>
            </div>
        </header>
    );
};

export default Header;
