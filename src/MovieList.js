import React, { Component } from 'react';

class Movies extends Component {

    //have to use props.items because that's what we're calling it as in App.js
  
    render() {
        return (
        <div>
            <ul>
                {this.props.items.map((item) => {
                return (<li className="movies" key={item.title}>{item.title}</li>)
                })}
            </ul>
        </div>
        )
    }
};


export default Movies;