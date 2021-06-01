import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './sass/Header.sass';
import Search from './components/Search/Search';
import MenuContext from '../../../containers/Menu/contextAPI/MenuContext';

const Header = (props) => {
    const {portalName} = props;
    const {isExtended} = useContext(MenuContext);

    const renderPortalName = () => {
        if (portalName && typeof portalName === 'string') {
            return <p>{portalName}</p>;
        }

        return null;
    };

    const renderTitle = () => {
        if (isExtended) {
            return (
                <div className="menu__header__title">
                    {renderPortalName()}
                    <p>Cosmos AppShell</p>
                </div>
            );
        }
        return null;
    };

    return (
        <header className="menu__header">
            <div className="menu__header__title__box">
                <div className="menu__header__logo">
                    <FontAwesomeIcon icon="meteor" size="3x" color="#ececec"/>
                </div>
                {renderTitle()}
            </div>
            <Search/>
        </header>
    );
};

Header.propTypes = {
    portalName: PropTypes.string
};

export default Header;
