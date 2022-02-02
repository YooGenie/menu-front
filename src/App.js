import React, {Component} from 'react';
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import Menu from "./page/menu/MenuList";
import Study from "./page/study/studyPage";
import AppLayout from "./components/layout/AppLayout";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={'/'} component={AppLayout}/>
                </Switch>
                <Switch>
                    <Route path={'/menu'} component={Menu}/>
                </Switch>
                <Switch>
                    <Route path={'/study'} component={Study}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
