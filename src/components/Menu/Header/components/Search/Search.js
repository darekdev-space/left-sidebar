import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './sass/Search.sass';

const Search = (props) => {
    const {callback} = props;
    const [value, setValue] = useState('');

    const handleValueChange = (event) => {
        setValue(event?.target?.value);

        // from contextAPI or actions from redux
        callback?.();
    };

    return (
        <div className="menu__header__search">
            <input value={value} onChange={handleValueChange} placeholder="Search..."/>
            <div className="menu__header__search-icon">
                <FontAwesomeIcon icon="search" size="lg" color="#ececec"/>
            </div>
        </div>
    );
};

Search.propTypes = {
    callback: PropTypes.func
};

export default Search;
