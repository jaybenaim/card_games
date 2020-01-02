import React from "react";
import "../assets/stylesheets/box.css";
const styles = {
  cursor: "move"
};
const Box = ({ title, yellow, all, seatCards2 }) => {
  const backgroundColor = yellow ? "yellow" : "white";

  const { image, rank, suit } = seatCards2 || "";

  return (
    <div style={{ ...styles, backgroundColor }}>
      {title}
      <img src={image} alt={rank + suit} className="durak-card-in-play" />{" "}
    </div>
  );
};
export default Box;
