import React, {useCallback, useContext} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './sass/MenuItem.sass';
import Icon from './components/Icon';
import MenuContext from '../../../containers/Menu/contextAPI/MenuContext';

const MenuItem = (props) => {
    const {
        id,
        label,
        style,
        icon,
        url,
        location,
        path,
        hasChildren,
        isExpand,
        isCounter,
        useUserName,
        toggleExpandLevel
    } = props;

    const {pathname} = location || {};
    const {isExtended} = useContext(MenuContext);

    const checkIfItemIsActive = useCallback(() => {
        if (pathname) {
            return pathname === url;
        }

        return false;
    }, [pathname, url]);

    const handleOnClick = () => {
        toggleExpandLevel?.(path);
    };

    const getStyle = () => {
        const {
            width,
            ...rest
        } = style || {};

        return rest;
    };

    const getIconProps = () => {
        return {
            icon,
            isCounter,
            useUserName
        };
    };

    const renderChevron = () => {
        if (hasChildren && isExtended) {
            return (
                <div className="menu__list__item__chevron">
                    <FontAwesomeIcon icon="chevron-right"/>
                </div>
            );
        }

        return null;
    };

    const renderLabel = () => (isExtended ? <p>{label}</p> : null);

    const renderContent = () => {
        return (
            <>
                <Icon {...getIconProps()}/>
                {renderLabel()}
                {renderChevron()}
            </>
        );
    };
    const classNames = cx('menu__list__item', {
        isActive: checkIfItemIsActive(),
        isExpand,
        isCategory: !url
    });

    const renderLink = () => {
        return (
            <button
                type="button"
                id={id}
                style={getStyle()}
                className={classNames}
                onClick={handleOnClick}
                tabIndex="-1"
            >
                <Link to={url}>
                    {renderContent()}
                </Link>
            </button>
        );
    };

    const renderCategory = () => {
        return (
            <button
                type="button"
                id={id}
                style={getStyle()}
                className={classNames}
                onClick={handleOnClick}
            >
                {renderContent()}
            </button>
        );
    };

    return url ? renderLink() : renderCategory();
};

MenuItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    url: PropTypes.string,
    isExpand: PropTypes.bool,
    useUserName: PropTypes.bool,
    isCounter: PropTypes.bool,
    location: PropTypes.shape({
        pathname: PropTypes.string
    }),
    path: PropTypes.string.isRequired,
    hasChildren: PropTypes.bool,
    toggleExpandLevel: PropTypes.func,
    style: PropTypes.shape({})
};

export default MenuItem;
