import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './sass/App.sass';

import '../../libs/fontawesome';

import Menu from '../Menu/Menu';
import ViewRouters from '../ViewRouters/ViewRouters';

const App = () => {
    return (
        <div className="app">
            <Router>
                <Menu/>
                <ViewRouters/>
            </Router>
        </div>
    );
};

export default App;
