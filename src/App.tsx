import React from "react";

import "./App.css";
import { QuizCard } from "./Components/QuizCard/QuizCard";

function App() {
  return (
    <div className="App">
      <div className="titleWrapper">
        <p>{'<'} Quiz <b>App</b> {'/>'}</p>
      </div>
      <QuizCard />
    </div>
  );
}

export default App;
