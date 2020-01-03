import React, { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import ItemTypes from "./ItemTypes";
import DraggableBox from "./DraggableBox";
import doSnapToGrid from "../../../assets/javascripts/snapToGrid";
import update from "immutability-helper";
const styles = {
  width: 900,
  height: 900,
  //   border: "1px solid black",
  position: "relative"
};

const Container = ({
  snapToGrid,
  activePileCards,
  seatCards2,
  playFirstCard
}) => {
  const [boxes, setBoxes] = useState({
    1: { top: 500, left: 100, seatCards2: seatCards2[0] },
    2: { top: 500, left: 160, seatCards2: seatCards2[1] },
    3: { top: 500, left: 200, seatCards2: seatCards2[2] },
    4: { top: 500, left: 240, seatCards2: seatCards2[3] },
    5: { top: 500, left: 280, seatCards2: seatCards2[4] },
    6: { top: 500, left: 320, seatCards2: seatCards2[5] }
  });

  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top }
          }
        })
      );
    },
    [boxes]
  );
  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      let left = Math.round(item.left + delta.x);
      let top = Math.round(item.top + delta.y);
      if (snapToGrid) {
        [left, top] = doSnapToGrid(left, top);
      }
      moveBox(item.id, left, top);

      return undefined;
    }
  });
  const renderBox = (item, key) => {
    return (
      <DraggableBox
        key={key}
        id={key}
        {...item}
        playFirstCard={playFirstCard}
      />
    );
  };
  return (
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map(key => renderBox(boxes[key], key))}
    </div>
  );
};
export default Container;
