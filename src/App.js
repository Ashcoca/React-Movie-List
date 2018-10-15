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
  }


  render() {
    return (
      <div className = "container">
        <h1 className ="title">Movie List</h1>
          <input type="text" className="add" onChange={this.searchHandler}/>
            {this.state.movies.map((item) => {
              return <div className="movies" key={item.title}>{item.title}</div>
            })
            }
      </div>
    );
  }
}

export default App;
