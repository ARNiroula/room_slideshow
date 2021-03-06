import React from "react";

import Card from "./Card";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Home = ({ property }) => {
  return (
    <div className="page">
      <section>
        <h1>AVAILABLE ROOMS</h1>
      </section>

      <TransitionGroup className="card-container">
        <CSSTransition key={property._id} timeout={1000} classNames="slide">
          <Card property={property} />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Home;
