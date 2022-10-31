import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default function Routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path = "/" exact component={Home} />
                    <Route path = "/product/:productId" exact component={Home} />
                </Switch>
            </Router>
        </div>
    );
}