import React, { Component } from 'react';
import './App.css';
import './MovieList.js';



class App extends Component {
  
  render() {
    let movies = 
  [
    {title: 'The Room'},
    {title: 'The Neverending Story'},
    {title: 'Willow'},
    {title: 'Surf Ninjas'},
    {title: 'Winston Checks In'},
  ];

  /*
  Search function:
  Use filter
  Need to add state


  */


  const moviesList = movies.map((data) => <div class="movies" key={data.title}>{data.title}</div>)
    return (
      <div class = "container">
        <h1 class ="title">Movie List</h1>
        {moviesList}
      </div>
    );
  }
}

export default App;
