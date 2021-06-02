import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import MenuItem from '../MenuItem';
import MenuContext from '../../../../containers/Menu/contextAPI/MenuContext';

import '../../../../libs/fontawesome';

describe('TEST MENU ITEM', () => {
    it('should render with link', () => {
        render(
            <MenuContext.Provider value={{isExtended: true}}>
                <BrowserRouter>
                    <MenuItem id="testId" label="test label" path="1" url="/example/test"/>
                </BrowserRouter>
            </MenuContext.Provider>
        );

        const node = screen.getByText('test label');
        expect(node.parentNode.getAttribute('href'))
            .toBe('/example/test');
    });

    it('should render category', () => {
        const {container} = render(
            <MenuContext.Provider value={{isExtended: true}}>
                <BrowserRouter>
                    <MenuItem
                        id="testId"
                        label="test label"
                        path="1"
                        hasChildren
                    />
                </BrowserRouter>
            </MenuContext.Provider>
        );

        const node = container.querySelector('.menu__list__item__chevron');
        expect(node)
            .toBeTruthy();
    });
});
