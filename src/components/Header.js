import React, {Component} from "react";
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from "./HomePage";
import Shop from "./Shop";
import Collection from "./Collection";
import Error from "./Error";
import Navbar from "./Navbar";

class Header extends Component{
    render() {

    return (
        <main>

            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/shop" component={Shop} />
                <Route path="/collection" component={Collection} />
                <Route component={Error}/>git

            </Switch>
        </main>
    )
    }


}

export default Header;