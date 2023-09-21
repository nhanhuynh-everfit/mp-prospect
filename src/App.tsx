import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./shared/src/shared/Button";

function App() {
  return (
    <div className="App">
       <h1>Client APP</h1>
      <Button label="New button" primary={true} size="xxx" />
    </div>
  );
}

export default App;
