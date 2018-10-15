import React, { Component } from 'react';
import './App.css';
// import Movies from './MovieList.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    movies:  
      [
        {title: 'The Room'},
        {title: 'The Neverending Story'},
        {title: 'Willow'},
        {title: 'Surf Ninjas'},
        {title: 'Winston Checks In'},
      ]
    };
    this.addItem = this.addItem.bind(this);
  }
  
  addItem(e) {
    //prevent button click from submitting
    e.preventDefault();

    //store our list, the item to add, and the form in variables for easy access
    let movies = this.state.movies;
    const newMovie = document.getElementById('add-movie-input');
    const form = document.getElementById('add-movie');

    //if our form is not empty
    if(newMovie.value != "") {
      //add the new item to the end of our list
      movies.push({title : newMovie.value});
      //then we use this to set the state for our list
      this.setState({
        movies: movies
      });

      //reset form
      form.reset();
    }
  }

  render() {
    return (
      <div className = "container">
        <div className = "add-container">
          <form className = "add-form" id="add-movie">
            <input type="text" className="add-input" id="add-movie-input" placeholder="Add Movie to List"></input>
            <button className="add-movie-button" onClick={this.addItem}>Add</button>
          </form>
        </div>
        <div className = "movies-container">
          <h1 className ="title">Movie List</h1>
            <Movies items = {this.state.movies}/>
        </div>
      </div>
    );
  }
}

class Movies extends Component {
  constructor(props) {
      super(props);
      this.state = {
        
      }
  }

  render() {
    return (
      <div>
        <ul>
            {this.state.movies.map((item) => {
              return <li className="movies" key={item.title}>{item.title}</li>
            })}
        </ul>
      </div>
    )
  }
};

export default App;
