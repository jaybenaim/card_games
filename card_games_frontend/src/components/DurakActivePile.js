import React, { useState } from "react";
import { useDrop } from "react-dnd";
import ItemTypes from "./ItemTypes";

const style = {
  height: "9rem",
  width: "6.5rem",
  marginLeft: "25%",
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
const DurackActivePile = ({
  wildCard,
  activePileCards,
  checkIfCardIsValid,
  card,
  setActiveCard,
  activeCard
}) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,

    drop: () => ({ name: "DurakActivePile" }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  const isActive = canDrop && isOver;

  let background = "transparent";

  if (isActive) {
    background = "rgba(46, 221, 46, 0.6)";
  } else if (canDrop) {
    // if (isOver) backgroundImage = activePileCards.cardPlayed.image;
  }
  return (
    <>
      <div ref={drop} style={{ ...style, background }}>
        {/* insert grid  */}
        <div className="durak-board-container">
          <div className="durak-board-spot1">
            <img
              src={activePileCards[0][`spot1`].image}
              alt={
                activePileCards[0][`spot1`].rank +
                activePileCards[0][`spot1`].suit
              }
            />
          </div>
          <div className="durak-board-spot2"></div>
          <div className="durak-board-spot3"></div>
          <div className="durak-board-spot4"></div>
          <div className="durak-board-spot5"></div>
          <div className="durak-board-spot6"></div>
        </div>

        {drop.name}
        {isActive ? "Release to drop" : "Drag a card here"}
      </div>
    </>
  );
};
export default DurackActivePile;
