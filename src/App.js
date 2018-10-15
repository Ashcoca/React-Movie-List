import React, { Component } from 'react';
import './App.css';
import './MovieList.js';



//map 



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
      //now we reset the form
      newMovie.classList.remove("is-danger")
    } else {
      //if the input doesn't have a value, make the border red since it's req
      newMovie.classList.add("is-danger");
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
              {this.state.movies.map((item) => {
                return <div className="movies" key={item.title}>{item.title}</div>
              })}
        </div>
      </div>
    );
  }
}

export default App;
