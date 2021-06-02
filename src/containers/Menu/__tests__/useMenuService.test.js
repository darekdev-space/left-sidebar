import {act, renderHook} from '@testing-library/react-hooks';
import useMenuService from '../hooks/useMenuService';

import getStaticMenu from '../../../components/Menu/Footer/config/staticMenu';

describe('TEST HOOK USE_MENU_SERVICE', () => {
    it('should fetch menu', async () => {
        const {
            result,
            waitForNextUpdate
        } = renderHook(() => useMenuService());

        await waitForNextUpdate();

        expect(Object.keys(result.current.menu).length)
            .toBeGreaterThan(0);
    });

    it('should use static menu', () => {
        const {
            result
        } = renderHook(() => useMenuService(getStaticMenu({name: 'Test Name'})));

        expect(Object.keys(result.current.menu).length)
            .toBe(4);
    });

    it('should expand level', async () => {
        const {
            result,
            waitForNextUpdate
        } = renderHook(() => useMenuService(null, true));

        await waitForNextUpdate();

        act(() => {
            result.current.toggleExpandLevel('1');
        });

        expect(result.current.menu['1.1'].isVisible)
            .toBeTruthy();
    });

    it('should collapse level if isHovered is equal false', async () => {
        const {
            result,
            waitForNextUpdate
        } = renderHook(() => useMenuService(null, false));

        await waitForNextUpdate();

        act(() => {
            result.current.toggleExpandLevel('1');
        });

        expect(result.current.menu['1.1'].isVisible)
            .toBeFalsy();
    });
});
