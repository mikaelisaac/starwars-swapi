import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class People extends Component{
	state = {
		peoples: []
	};

	componentDidMount(){
		this.loadFilms();
	}
	
	loadFilms = async () => {
		const response = await api.get('people');
		
		console.log(response.data.results);

		this.setState({peoples: response.data.results});
	}
	
	render(){
		let id_finder = 1;            
		
		return(
			<div className="film-list">
				{this.state.peoples.map(people =>(
					<article key={people.episode_id}>
						<h3><strong>{people.name}</strong></h3>
						
						<Link to={`/people-detail/`+ id_finder++}>Detalhes</Link>
					</article>
				))}
			</div>
		)
	}
}