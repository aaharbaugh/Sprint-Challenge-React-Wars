import React, { Component } from 'react';
import './App.css';

import  CharacterList  from './components/CharacterList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentPage: 1
    };
  }

  componentDidMount() {
    this.getCharacters(`https://swapi.co/api/people/?page=${this.state.currentPage}`);
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
        console.log(data)
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = () => {
    this.setState(prevState => {
      let newNumber = prevState.currentPage + 1
      console.log(newNumber)
      return {
        currentPage: newNumber
      }
    })
    this.getCharacters(`https://swapi.co/api/people/?page=${this.state.currentPage}`);
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList characters={this.state.starwarsChars} nextPageFunc={this.nextPage}/>
      </div>
    );
  }
}

export default App;
