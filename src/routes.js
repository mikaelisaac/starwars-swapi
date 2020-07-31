import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';

import Film from './pages/film';
import FilmDetail from './pages/film-detail';

import Planet from './pages/planet';
import PlanetDetail from './pages/planet-detail';

import People from './pages/people';
import PeopleDetail from './pages/people-detail';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Main} />
			
			<Route path="/films" component={Film} />
			<Route path="/film-detail/:id" component={FilmDetail} />

			<Route path="/planets" component={Planet} />
			<Route path="/planet-detail/:id" component={PlanetDetail} />

			<Route path="/peoples" component={People} />
			<Route path="/people-detail/:id" component={PeopleDetail} />
		</Switch>    
	</BrowserRouter>
);

export default Routes;