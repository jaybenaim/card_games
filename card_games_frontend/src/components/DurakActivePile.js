import React, { Component } from "react";
import { useDrop } from "react-dnd";
import ItemTypes from "./ItemTypes";
const style = {
  height: "9rem",
  width: "6.5rem",
  marginLeft: "15%",
  marginBottom: "1.5rem",
  marginTop: "7.5em",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left",
  position: "absolute",
  border: "2px dashed black"
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
  let backgroundColor = "transparent";
  if (isActive) {
    // check card if valid
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    // show card played
    backgroundColor = "darkkhaki";
  }
  return (
    <div ref={drop} style={{ ...style, backgroundColor }}>
      {/* insert grid  */}
      {isActive ? "Release to drop" : "Drag a card here"}
    </div>
  );
};
export default DurackActivePile;
