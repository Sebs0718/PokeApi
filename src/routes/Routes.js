import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import GamesMore from '../pages/GamesMore';
import Games from '../pages/Games';
import Locations from '../pages/Locations';
import LocationMore from '../pages/LocationsMore';
import Pokemons from '../pages/Pokemons';

function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/Games' component={Games} />
                <Route exact path='/Locations' component={Locations} />
                <Route exact path='/Pokemons' component={Pokemons} />
                <Route exact path='/LocationMore/:id' component={LocationMore} />
                <Route exact path='/GameMore/:id' component={GamesMore} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;