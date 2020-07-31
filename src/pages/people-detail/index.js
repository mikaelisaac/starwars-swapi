import React, { Component } from 'react';

import api from '../../services/api';
//import './styles.css';

export default class PeopleDetail extends Component{
    state = {
        people:[],
    };

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`people/${id}`);

        this.setState({people: response.data});
    };
    
    render(){
        const { people } = this.state;

        return (
            <div className="film">
                <div className="film-info">
                    <h1 className="film-title">{people.name}</h1>
                    <h2>Ano de nascimento: {people.birth_year}</h2>
                    <h2>Gênero: {people.gender}</h2>
                </div>
            </div>
        );
    }
}