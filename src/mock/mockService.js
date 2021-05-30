import menu from './menu.json';

const axiosMock = () => {
    return new Promise((resolve) => {
        return resolve({data: menu});
    });
};

export default axiosMock;
