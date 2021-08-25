import React from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import GamesMore from '../pages/GamesMore';
import Games from '../pages/Games';
import Locations from '../pages/Locations';
import LocationMore from '../pages/LocationsMore';
import Pokemons from '../pages/Pokemons';
import PokemonsMore from '../pages/PokemonsMore';

function Routes (){
    return(
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/Games' component={Games} />
                <Route exact path='/Locations' component={Locations} />
                <Route exact path='/Pokemons' component={Pokemons} />
                <Route exact path='/LocationMore/:id' component={LocationMore} />
                <Route exact path='/GameMore/:id' component={GamesMore} />
                <Route exact path='/PokemonMore/:id' component={PokemonsMore} />
            </Switch>
        </HashRouter>
    );
}

export default Routes;