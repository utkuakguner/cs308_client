import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import NotFound from "./NotFound";
import * as serviceWorker from "./serviceWorker";
(async () => {
    ReactDOM.render(
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Main />}/>
                <Route path="/*" render={() => <NotFound/>}/> 
            </Switch>
        </Router>
    , document.getElementById("root"));
    serviceWorker.register();
})();