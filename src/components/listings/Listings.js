import React from "react";
import Listing from "./Listing";
import "./styles.css";
function Listings({ list }) {
  return (
    <div className="cards-flex">
      {list.map((card, i) => (
        <Listing card={card} key={i} />
      ))}
    </div>
  );
}

export default Listings;
