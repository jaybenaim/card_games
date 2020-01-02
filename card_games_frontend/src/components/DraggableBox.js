import React, { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import ItemTypes from "./ItemTypes";
import { getEmptyImage } from "react-dnd-html5-backend";
import Box from "./Box";
import DurakHand from "./DurakHand";
function getStyles(left, top, isDragging) {
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  return {
    position: "absolute",
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : ""
  };
}
const DraggableBox = props => {
  const [cardAmount, setCardAmount] = useState(6);

  const {
    id,
    title,
    left,
    top,
    activePileCards,
    seatCards2,
    playFirstCard
  } = props;
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.BOX, id, left, top, title },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        setCardAmount(cardAmount - 1);
        playFirstCard(id);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  /// insert here drop from Durak
  // playFirstCard(id);
  ///
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);
  return (
    <div ref={drag} style={getStyles(left, top, isDragging)}>
      <Box
        title={title}
        activePileCards={activePileCards}
        seatCards2={seatCards2}
      />
      {/* <DurakHand /> */}
    </div>
  );
};
export default DraggableBox;
