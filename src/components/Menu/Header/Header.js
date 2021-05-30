import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './sass/Header.sass';
import Search from './components/Search/Search';

const Header = (props) => {
    const {portalName} = props;

    const renderPortalName = () => {
        if (portalName && typeof portalName === 'string') {
            return <p>{portalName}</p>;
        }

        return null;
    };

    return (
        <header className="menu__header">
            <div className="menu__header__title__box">
                <div className="menu__header__logo">
                    <FontAwesomeIcon icon="meteor" size="3x" color="#ececec"/>
                </div>
                <div className="menu__header__title">
                    {renderPortalName()}
                    <p>Cosmos AppShell</p>
                </div>
            </div>
            <Search/>
        </header>
    );
};

Header.propTypes = {
    portalName: PropTypes.string
};

export default Header;
