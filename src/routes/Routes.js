import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Games from '../pages/Games';
import Locations from '../pages/Locations';
import Pokemons from '../pages/Pokemons';

function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/Games' component={Games} />
                <Route exact path='/Locations' component={Locations} />
                <Route exact path='/Pokemons' component={Pokemons} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;