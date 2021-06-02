import {prepareMenu, createFlatStructure, getPath, getChildrenPaths} from '../helpers/menuHelpers';
import mockMenu from '../../../mock/menu.json';

describe('TEST MENU HELPERS', () => {
    it('should get path', () => {
        expect(getPath('', 1))
            .toBe('2');
        expect(getPath('1', 1))
            .toBe('1.2');
        expect(getPath('1.1.1', 0))
            .toBe('1.1.1.1');
    });

    it('should return flat structure', () => {
        expect(createFlatStructure(null))
            .toStrictEqual({});

        const menu = createFlatStructure(mockMenu.menuItems);
        expect(Object.keys(menu).length)
            .toBe(9);
        expect(menu['1'].isVisible)
            .toBeTruthy();
        expect(menu['1'].isExpand)
            .toBeFalsy();
        expect(menu['1.1'].isVisible)
            .toBeFalsy();
    });

    it('should prepareMenu', () => {
        expect(prepareMenu())
            .toStrictEqual({});
        expect(prepareMenu({menuItems: null}))
            .toStrictEqual({});
        expect(Object.keys(prepareMenu(mockMenu)).length)
            .toBe(9);
    });

    it('should get children paths', () => {
        const menu = {
            1: {},
            1.1: {},
            '1.1.1': {},
            '1.1.1.1': {},
            2: {}
        };

        expect(getChildrenPaths(menu, '1'))
            .toStrictEqual(['1.1']);
        expect(getChildrenPaths(menu, '1', true))
            .toStrictEqual(['1.1', '1.1.1', '1.1.1.1']);
    });
});
