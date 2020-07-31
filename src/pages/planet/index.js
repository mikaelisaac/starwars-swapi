import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Planet extends Component{
	state = {
		planets: []
	};

	componentDidMount(){
		this.loadPlanets();
	}
	
	loadPlanets = async () => {
		const response = await api.get('planets');
		
		console.log(response.data.results);

		this.setState({planets: response.data.results});
	}
	
	render(){
		let id_finder = 1;            
	
		return(
			<div className="film-list">
				{this.state.planets.map(planet =>(
					<article key={planet.name}>
						<h3><strong>{planet.name}</strong></h3>
						<Link to={`/planet-detail/` + id_finder++}>Detalhes</Link>
					</article>
				))}
				</div>
		)
	}
}