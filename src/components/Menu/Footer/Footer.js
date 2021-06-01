import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import './sass/Footer.sass';
import useMenuService from '../../../containers/Menu/hooks/useMenuService';
import getStaticMenu from './config/staticMenu';
import MenuList from '../MenuList/MenuList';
import MenuContext from '../../../containers/Menu/contextAPI/MenuContext';

const Footer = (props) => {
    const {user} = props;
    const {isExtended} = useContext(MenuContext);

    const {
        menu,
        toggleExpandLevel
    } = useMenuService(getStaticMenu(user), isExtended);

    return (
        <div className="menu__footer">
            <MenuList menu={menu} toggleExpandLevel={toggleExpandLevel}/>
        </div>
    );
};

Footer.propTypes = {
    user: PropTypes.shape({})
};

// User should be taken from context or redux
Footer.defaultProps = {
    user: {
        name: 'Corey Robinson'
    }
};

export default Footer;
