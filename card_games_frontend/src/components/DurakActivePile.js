import React, { Component } from "react";
import { useDrop } from "react-dnd";
import ItemTypes from "./ItemTypes";
const style = {
  height: "14rem",
  width: "10rem",
  //   marginRight: "1.5rem",
  //   marginBottom: "1.5rem",
  //   color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem"
  //   lineHeight: "normal",
  //   float: "left"
};
const DurackActivePile = () => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: () => ({ name: "DurackActivePile" }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  const isActive = canDrop && isOver;
  let backgroundColor = "#222";
  if (isActive) {
    // check card if valid
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    // show card played
    backgroundColor = "darkkhaki";
  }
  return (
    <div ref={drop} style={{ ...style, backgroundColor }}>
      {isActive ? "Release to drop" : "Drag a card here"}
    </div>
  );
};
export default DurackActivePile;
