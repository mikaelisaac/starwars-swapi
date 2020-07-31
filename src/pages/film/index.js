import React, { Component } from 'react';
import Moment from 'react-moment';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Film extends Component{
	state = {
		films: []
	};

	componentDidMount(){
		this.loadFilms();
	}
	
	loadFilms = async () => {
		const response = await api.get('films');
		
		console.log(response.data.results);

		this.setState({films: response.data.results});

	}
	
	
	render(){
		let id_finder = 1;            

		return(
			<div className="film-list">
				{this.state.films.map(film =>(
						
					<article key={film.episode_id}>
						<h3><strong>{film.title}</strong></h3>
						<p>Data de lançamento: <Moment format="DD/MM/YYYY">{film.release_date}</Moment></p><br/>
						<Link to={`/film-detail/` + id_finder++}>Detalhes</Link>
					</article>
				))}
			</div>
		)
	}
}