import React from "react";

function Cards(props) {
  return (
    <div className="cards">
      <h2 className="h2">{props.head}</h2>
      <img src={props.img} className="img1" />
      <a href="" className="anchor">
        Shop Now
      </a>
    </div>
  );
}

export default Cards;
