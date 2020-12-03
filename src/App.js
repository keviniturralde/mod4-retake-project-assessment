import './App.css';
import React from 'react';
import MoviesContainer from './Containers/MoviesContainer'
import RentedMovies from './Containers/RentedMovies';
import NewMovie from './Containers/NewMovie';

class App extends React.Component {

  state = {
    api: [],
    MyRented: []
  }
    componentDidMount() {
      fetch('http://localhost:5000/movies')
      .then(response => response.json())
      .then(movies => this.setState ({ api: movies }))
    }

    submitHandler = (movieObj) => {
      fetch('http://localhost:5000/movies', {
        method: 'POST',
        headers: {'Content-Type': "application/json", "Accepts": "application/json"
        },
        body: JSON.stringify(movieObj)
      })
      .then(response => response.json())
      .then(newMovie => this.setState ({api: [...this.state.api], newMovie}))
      .catch(console.log)
    }
    
    returnMovie = (movie) => {
      let rented = this.state.MyRented.some(e => e.id === movie.id)
      let newArray = this.state.MyRented.filter(e => e.id !== movie.id)
      if (rented) this.setState ({ MyRented : newArray})
    }
    
     clickHandler = (movie) => {
        let rented = this.state.MyRented.some(e => e.id === movie.id)
        if (!rented && this.state.MyRented.length <= 2) this.setState ({ MyRented: [...this.state.MyRented, movie]})
      }
    render() {
    return (
      <div className="app">
        <NewMovie submitHandler={this.submitHandler}/>
        <MoviesContainer clickHandler={this.clickHandler} movies={this.state.api}/>
        <RentedMovies  clickHandler={this.returnMovie}movies={this.state.MyRented}/>
      </div>
    );
  }
}


export default App;
