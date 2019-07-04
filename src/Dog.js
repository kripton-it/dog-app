import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dog.css";

class Dog extends Component {
  render() {
    const { name, age, src, facts } = this.props.dog;
    return (
      <div className="container">
        <div className="Dog row justify-content-center mt-5">
          <div className="col-11 col-lg-5">
            <div className="card Dog-card">
              <img className="card-img-top" src={src} alt={name} />
              <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4 className="card-subtitle text-muted">{age} years old</h4>
              </div>
              <ul className="list-group list-group-flush">
                {facts.map((fact, index) => (
                  <li className="list-group-item" key={index}>{fact}</li>
                ))}
              </ul>
              <div className="card-body">
                <Link to="/dogs" className="btn btn-info">Back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
