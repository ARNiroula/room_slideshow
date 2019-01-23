import React, { Component } from "react";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Card from "./components/Card";
import data from "./data/data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appearHome: true,
      properties: data.properties,
      property: data.properties[0]
    };
  }
  state = {
    redirect: false
  };
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return (
        <Route
          path="/"
          component={() => {
            window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            return null;
          }}
        />
      );
    }
  };
  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };
  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };
  toggleAppear = () => {
    this.setState({
      appearHome: !this.state.appearHome
    });
  };

  render() {
    const { properties, property } = this.state;
    return (
      <div className="App">
        {/* <button onClick={() => this.toggleAppear()}>
          Appear: {`${appearHome}`}
        </button> */}
        <div>
          {this.renderRedirect()}
          <button onClick={this.setRedirect}>BOOK NOW</button>
        </div>
        <button
          onClick={() => this.nextProperty()}
          disabled={property.index === data.properties.length - 1}
        >
          Next
        </button>
        <button
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
        >
          Prev
        </button>
        <div className="page">
          <section>
            <h1>Booking</h1>
          </section>

          <div className="col">
            <div className={`cards-slider active-slide-${property.index}`}>
              <div
                className="cards-slider-wrapper"
                style={{
                  transform: `translateX(-${property.index *
                    (100 / properties.length)}%)`
                }}
              >
                {properties.map(property => (
                  <Card key={property._id} property={property} />
                ))}
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default App;
