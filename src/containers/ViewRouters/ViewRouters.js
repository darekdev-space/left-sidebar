import React from 'react';
import {Route, Switch} from 'react-router-dom';

import MainPage from '../../pages/MainPage/MainPage';
import ExamplePage from '../../pages/ExamplePage/ExamplePage';

const ViewRouters = () => {
    return (
        <div className="view_wrapper">
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/example" component={ExamplePage}/>
            </Switch>
        </div>
    );
};

export default ViewRouters;
