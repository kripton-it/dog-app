import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import whiskey from "./imgs/whiskey.jpg";
import hazel from "./imgs/hazel.jpg";
import tubby from "./imgs/tubby.jpg";

import Home from "./Home";
import Dog from "./Dog";
import Navbar from "./Navbar";

function App({ dogs }) {
  const getDog = (props) => {
    const name = props.match.params.name;
    const targetDog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
    return <Dog {...props} dog={targetDog} />;
  };
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route
          exact
          path="/dogs/:name"
          render={getDog}
        />
        <Route
          exact
          path="/dogs"
          render={routeProps => <Home {...routeProps} dogs={dogs} />}
        />
        <Redirect to="/dogs" />
      </Switch>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Hazel",
      age: 3,
      src: hazel,
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food."
      ]
    }
  ]
};

export default App;
