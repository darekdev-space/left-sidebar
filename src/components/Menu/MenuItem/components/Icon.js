import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const getInitials = (name) => {
    const parts = name.split(' ');
    return `${parts.shift()?.charAt(0)}${parts.shift()?.charAt(0) || ''}`;
};

const Icon = (props) => {
    const {
        icon,
        isCounter,
        useUserName,
        user,
        notifications
    } = props;

    const {name} = user;

    const renderCounter = () => {
        if (isCounter) {
            return (
                <div className="menu__list__item__icon__counter">
                    {notifications}
                </div>
            );
        }

        return null;
    };

    const renderIcon = () => {
        if (useUserName) {
            return (
                <div className="menu__list__item__icon__username">
                    <p>{getInitials(name)}</p>
                </div>
            );
        }

        if (icon) {
            return <FontAwesomeIcon icon={icon}/>;
        }

        return null;
    };

    return (
        <div className="menu__list__item__icon">
            {renderIcon()}
            {renderCounter()}
        </div>
    );
};

// The assumption for notifications is a selector
// that returns the number of notifications from the store (redux).

Icon.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string
    }),
    icon: PropTypes.string,
    isCounter: PropTypes.bool,
    useUserName: PropTypes.bool,
    notifications: PropTypes.number
};

Icon.defaultProps = {
    icon: '',
    notifications: 4,
    user: {
        name: 'Corey Robinson'
    }
};

export default Icon;
