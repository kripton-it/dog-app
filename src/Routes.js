import { Route, Switch, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./Home";
import Dog from "./Dog";

class Routes extends Component {
  render() {
    const getDog = (props) => {
      const name = props.match.params.name;
      const targetDog = this.props.dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
      return <Dog {...props} dog={targetDog} />;
    };

    return (
      <Switch>
        <Route exact path="/dogs/:name" render={getDog} />
        <Route
          exact
          path="/dogs"
          render={routeProps => <Home {...routeProps} dogs={this.props.dogs} />}
        />
        <Redirect to="/dogs" />
      </Switch>
    );
  }
}

export default Routes;
