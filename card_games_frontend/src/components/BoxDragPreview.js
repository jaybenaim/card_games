import React, { useEffect, useState, memo } from "react";
import Box from "./Box";
const styles = {
  display: "inline-block",
  transform: "rotate(-7deg)",
  marginLeft: "-100px",
  WebkitTransform: "rotate(-7deg)"
};
const BoxDragPreview = memo(({ title, seatCards2 }) => {
  const [tickTock, setTickTock] = useState(false);
  useEffect(
    function subscribeToIntervalTick() {
      const interval = setInterval(() => setTickTock(!tickTock), 500);
      return () => clearInterval(interval);
    },
    [tickTock]
  );
  return (
    <div style={styles}>
      <Box title={title} yellow={tickTock} seatCards2={seatCards2} />
    </div>
  );
});
export default BoxDragPreview;
