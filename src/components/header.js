import React  from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import About from '../components/about';
import NavBar from '../components/navbar';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';
import Resume from '../components/resume';

function Header() {
    return (
        <Router>
            <NavBar/>
            {/* <Switch>
                <Route exact path="/">
                    <Redirect to="" />
                </Route>
            </Switch> */}
        </Router>
    )
}

export default Header;