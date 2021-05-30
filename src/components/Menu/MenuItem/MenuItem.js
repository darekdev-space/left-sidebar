import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
    const {id, url, label, style} = props;

    return (
        <div id={id} style={style || {}} className="menu__list__item">
            <Link to={url}>{label}</Link>
        </div>
    );
};

MenuItem.propTypes = {
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    style: PropTypes.shape
};

export default MenuItem;
