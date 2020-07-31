import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class PlanetDetail extends Component{
    state = {
        planet:[],
    };

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`planets/${id}`);

        this.setState({planet: response.data});
        
    };
    
    render(){
        const { planet } = this.state;

        return (
            <div className="film">
                <div className="film-info">
                    <h1 className="film-title">{planet.name}</h1>
                </div>
                <br/><br/>
                <p>População: {planet.population} </p><br/>
                <p>Clima: {planet.climate} </p><br/>
                <p>Diâmetro: {planet.diameterte} </p><br/>
                <p>Período órbita: {planet.orbital_period} </p><br/>
                <p>Período rotação: {planet.rotation_period} </p><br/>
            </div>
            
        );
    }
}