import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Menu from "./page/menu/MenuList";
import Study from "./page/study/studyPage";
import AppLayout from "./components/layout/AppLayout";
import StateStudy from "./page/statePage";
import ComponentInComponent from "./page/ComponentInComponent";
import StudyUseMemoMain from "./page/studyUseMemoMain";

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
                <Switch>
                    <Route path={'/state'} component={StateStudy}/>
                </Switch>
                <Switch>
                    <Route path={'/componentInComponent'} component={ComponentInComponent}/>
                </Switch>
                <Switch>
                    <Route path={'/useMemo'} component={StudyUseMemoMain}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
