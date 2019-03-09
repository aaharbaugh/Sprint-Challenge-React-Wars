import React, { Component } from 'react';
import './StarWars.css';

class Character extends Component {
    constructor(props){
        super();
        this.state = {
            image: '',
            id: 0
        }
    };



    componentDidMount(){
        this.getImage(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${this.props.character.url.match( /\d+/ )[0]}.json`)
    }

    getImage = URL => {
        fetch(URL)
            .then(res => {
            return res.json();
            })
            .then(data => {
            this.setState({ image: data.image });
            })
            .catch(err => {
            throw new Error(err);
            });
    }

    render(){
        return (
            <div className="character">
                <img className="character-img" src={this.state.image}></img>
            </div>
        )
    }
}

export default Character;