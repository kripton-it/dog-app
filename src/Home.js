import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1 className="display-1 text-center">Dog List</h1>
        <div className="container">
          <div className="row">
            {this.props.dogs.map(({name, src}) => (
              <div className="Home-dog col-md-6 col-lg-4 text-center" key={name}>
                <Link to={`/dogs/${name}`}>
                  <img src={src} alt={name}/>
                </Link>
                <h3>{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;