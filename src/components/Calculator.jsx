import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState(""); // State for displaying the input and result

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  // Function to handle calculation when "=" is clicked
  const handleCalculate = () => {
    try {
      const result = new Function('return ' + display)();
      setDisplay(result.toString()); 
    } catch (error) {
      setDisplay("Error");
    }
  };

  // Function to clear the display
  const handleClear = () => {
    setDisplay("");
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">

        <div className="row">
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
        </div>

        <div className="row">
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
        </div>

        <div className="row">
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("*")}>*</button>
        </div>
        
        <div className="row">
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick(".")}>.</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
        </div>

        <button onClick={handleClear} className="clear" >
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default Calculator;
