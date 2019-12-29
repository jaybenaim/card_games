import React, { useState } from "react";
import "../assets/stylesheets/durakHand.css";
import { useDrag } from "react-dnd";
// import { ItemTypes } from "./Constants";
import ItemTypes from "./ItemTypes";
const style = {
  //   border: "1px dashed gray",
  //   backgroundColor: "white",
  //   padding: "0.5rem 1rem",
  //   marginRight: "1.5rem",
  //   marginBottom: "1.5rem",
  cursor: "move"
  //   float: "left"
};
const DurakHand = ({ name, image, suit, rank, id, removeCard }) => {
  const [cardAmount, setCardAmount] = useState(6);
  const [{ isDragging }, drag] = useDrag({
    item: {
      name,
      type: ItemTypes.BOX
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        setCardAmount(cardAmount - 1);
        removeCard(id);
        alert(`You dropped ${rank} into ${dropResult.name}!`);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
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
