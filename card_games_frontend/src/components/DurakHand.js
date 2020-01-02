import React, { useState, useEffect } from "react";
import "../assets/stylesheets/durakHand.css";
import { useDrag } from "react-dnd";
import ItemTypes from "./ItemTypes";
import { getEmptyImage } from "react-dnd-html5-backend";

const style = {
  cursor: "move"
};
const DurakHand = ({
  name,
  image,
  suit,
  rank,
  id,
  playFirstCard,
  card,
  checkIfCardIsValid,
  setActiveCard
}) => {
  const [cardAmount, setCardAmount] = useState(6);
  const [{ isDragging }, drag, preview] = useDrag({
    item: {
      name,
      image,
      suit,
      rank,
      type: ItemTypes.BOX
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (isDragging) {
        setCardAmount(cardAmount - 1);
        playFirstCard(id);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);
  const opacity = isDragging ? 0.4 : 1;
  const cardKey = `durak-player-card durak-card-${id}`;

  return (
    <div className="player-hand">
      <div className={cardKey}>
        <div
          ref={drag}
          style={{
            ...style,
            opacity
          }}
        >
          {name}
          <img src={image} alt={rank + suit} />
        </div>
      </div>
    </div>
  );
};
export default DurakHand;

// export default function DurakHandCard({
//   isDragging,
//   text,
//   image,
//   suit,
//   rank,
//   id
// }) {
//   const [{ opacity }, dragRef] = useDrag({
//     item: { type: "box", text },
//     collect: monitor => ({
//       opacity: monitor.isDragging() ? 0.5 : 1
//     })
//   });

//   var cardKey = `durak-player-card durak-card-${id}`;
//   return (
//     <div className="player-hand">
//       <div className={cardKey}>
//         <div ref={dragRef} style={{ opacity }}>
//           <img src={image} alt={rank + suit} />
//         </div>
//       </div>
//     </div>
//   );
// }
