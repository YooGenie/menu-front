import React, {Component} from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import './App.less';
import Menu from "./page/menu/MenuList";


class App extends Component {
    render() {
        return (
            <HashRouter>
                    <Switch>
                        <Route path={''} component={Menu} />
                    </Switch>
            </HashRouter>
        );
    }
}

export default App;
