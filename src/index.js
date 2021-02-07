import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function App() {
  const [offSetTop, setOffSetTop] = useState(300)
  const [offSetLeft, setOffSetLeft] = useState(0)

  const moveUp = () => {
    setOffSetTop(offSetTop - 50)
  }
  const moveDown = () => {
    setOffSetTop(offSetTop + 50)
  }
  const moveLeft = () => {
    setOffSetLeft(offSetLeft - 50)
  }
  const moveRight = () => {
    setOffSetLeft(offSetLeft + 50)
  }
  return (
    <div className="App">
      <h1>Move the Box!</h1>

      {/* handle the click event on this button */}
      <button onClick={() => moveUp()}>👆 Move Up 👆</button>
      <button onClick={() => moveDown()}>👆 Move Down 👆</button>
      <br></br>
      <button onClick={() => moveLeft()}>👆 Move Left 👆</button>
      <button onClick={() => moveRight()}>👆 Move Right 👆</button>
      {/* move this box using inline styles */}
      <div style={{
        transform: `translate(${offSetLeft}px, ${offSetTop}px)`
      }}
        className="box"/>

    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
