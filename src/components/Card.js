import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
const Card = ({ property }) => {
  const {
    index,
    picture,
    type,

    bedrooms,
    bathrooms,
    money
  } = property;
  return (
    <div id={`card-${index}`} className="card">
      <img src={picture} />
      <div className="details">
        <span className="index">{index + 1}</span>
        <p className="location">
          {type}
          <br />
        </p>
        <ul className="features">
          <li className="icon-bed">
            {bedrooms} <span>bedrooms</span>
          </li>
          <li className="icon-bath">
            {bathrooms} <span>bathrooms</span>
          </li>
          <li className="icon-dollar">
            {money} <span>Price</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired
};

export default Card;
