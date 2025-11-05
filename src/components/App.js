import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  // State to track whether paragraph should be shown
  const [showParagraph, setShowParagraph] = useState(false);

  // Handler for button click
  const handleClick = () => {
    setShowParagraph(true);
  };

  return (
    <div id="main">
      {/* Button with id="click" */}
      <button id="click" onClick={handleClick}>
        Click Me
      </button>

      {/* Conditionally render paragraph when showParagraph is true */}
      {showParagraph && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.
        </p>
      )}
    </div>
  );
}

export default App;
