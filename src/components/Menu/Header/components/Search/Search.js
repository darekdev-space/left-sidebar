import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './sass/Search.sass';
import MenuContext from '../../../../../containers/Menu/contextAPI/MenuContext';

const DEFAULT_PLACEHOLDER = 'Search...';

const Search = (props) => {
    const {callback} = props;
    const {isExtended} = useContext(MenuContext);

    const [value, setValue] = useState('');

    const handleValueChange = (event) => {
        setValue(event?.target?.value);

        // from contextAPI or actions from redux
        callback?.();
    };

    const placeholder = isExtended ? DEFAULT_PLACEHOLDER : '';

    const classNames = cx('menu__header__search', {isExtended});

    return (
        <div className={classNames}>
            <input value={value} onChange={handleValueChange} placeholder={placeholder}/>
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
