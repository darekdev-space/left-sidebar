import {useEffect, useState} from 'react';
import prepareMenu from '../helpers/menuHelpers';
import axiosMock from '../../../mock/mockService';

const useMenuService = () => {
    const [menu, setMenu] = useState({});

    const fetchMenu = async () => {
        try {
            const {data} = await axiosMock();
            setMenu(prepareMenu(data));
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e.toString());
        }
    };

    useEffect(() => {
        fetchMenu().then();
    }, []);

    return menu;
};

export default useMenuService;
