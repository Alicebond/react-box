import { useState } from "react";
import data from "./data";
import Box from "./Box";
function App() {
  const [boxes, setBoxes] = useState(data);
  function toggle(id) {
    setBoxes((prev) => {
      return prev.map((i) => {
        return i.id === id ? { ...i, on: !i.on } : i;
      });
    });
  }
  const boxElements = boxes.map((i) => {
    return <Box on={i.on} toggle={() => toggle(i.id)} />;
  });
  return boxElements;
}

export default App;
