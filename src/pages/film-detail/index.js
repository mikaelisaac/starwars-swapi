import React, { Component } from 'react';
import Moment from 'react-moment';

import api from '../../services/api';
import './styles.css';

export default class FilmDetail extends Component{
    state = {
        film:[],
    };

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`films/${id}`);

        this.setState({film: response.data});
        
    };
    
    render(){
        const { film } = this.state;

        return (
            <div className="film">
                <div className="film-info">
                    <h1 className="film-title">Episode {film.episode_id}: {film.title}</h1>
                    <br/><br/>
                    <p>Diretor: {film.director} </p><br/>
                    <p>Produtor(es): {film.producer} </p><br/>
                    <p>Data de lançamento: <Moment format="DD/MM/YYYY">{film.release_date}</Moment></p><br/>

                    <div className="film-others">
                        <p className="film-details">Personagens<i className="arrow"></i></p><br/>
                        <p className="film-details">Planetas<i className="arrow"></i></p>
                    </div>
                </div>
                
                <div className="wrap">
                    <p className="film-opening">{film.opening_crawl}</p>
                </div>
            </div>
            
        );
    }
}