import React, { createContext, useState } from "react";
import "./App.css";
import Game from "./components/game/gamelogic";
function App() {
  const UserContext = createContext("Game");
  const [scale, setScale] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [input, setInput] = useState(0);
  
  const onPlayClick = (e) => {
    e.preventDefault();
    if (input == null || input === "" || isNaN(input) || input < 3) {
      alert("Please enter a valid number (e.g. 3)");
    } else {
      setSubmit(true);
      setScale(input)
    }
  };
  const onPressedEnter = (e) => {
    // keycode for enter
    if(e.keyCode === 13) {
      e.preventDefault();
      if (input == null || input === "" || isNaN(input) || input < 3) {
        alert("Please enter a valid number (e.g. 3)");
      } else {
        setSubmit(true);
        setScale(input)
      }
    }
  }
  const onReplayClick = (e) => {
    e.preventDefault();
    setSubmit(false);
    setScale(input)
    setSubmit(true);
  }

  const onInputChange = (e) => {
    setInput(e.target.value);
  };


  return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <form>
          <label>
            Scale <span> </span>
            <input type="text"  placeholder="input dimension" onChange={onInputChange} onKeyDown={onPressedEnter}/>
          </label>
        </form>
        <div className="submit-button-wrapper">
          {submit === true ? <button onClick={onReplayClick}>
            <p>Play Again</p>
          </button> : <button onClick={onPlayClick}>
            <p>Play</p>
          </button>}
        </div>
        <UserContext.Provider value={scale}>
        <div className="game-wrapper">
          {submit === true ? <Game context={UserContext}></Game> : null}
        </div>
        </UserContext.Provider>
      </div>
    
  );
}

export default App;
