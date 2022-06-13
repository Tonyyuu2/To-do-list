import "./App.css";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

const itemsFromBackend = [
  { id: uuidv4(), content: "First task" },
  { id: uuidv4(), content: "Second task" },
];

const columnsFromBackend = [
  {
    [uuidv4()]: {
      name: "Todo",
      items: [],
    },
  },
];

function App() {

  const [columns, setColumns] = useState(columnsFromBackend)
  return (
    <div className="App">
      <DragDropContext
        onDropEnd={(result) => console.log(result)}
      ></DragDropContext>
    </div>
  );
}

export default App;
