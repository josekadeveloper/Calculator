import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [active, setActive] = useState(false);
  const lastCharacter = "|";

  const addInput = (val: any) => {
    setInput(input + val);
  };

  const expCalculate = () => {
    input ? setInput(eval(input)) : alert("Please enter values to perform calculations.");
  };

  const turnOn = () => {
    setActive(true);
  }

  const turnOff = () => {
    setActive(false);
    setInput("");
  }

  const handleSqrt = () => {
    try {
      const result = Math.sqrt(parseFloat(input));
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  }

  const handlePow = () => {
    setInput(Math.pow(parseFloat(input), 2).toString());
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  }

  const buttons = [
    "ON", "OFF", "DEL", "C",
    "(", ")", "√", "x²",
    "1", "2", "3", "+",
    "4", "5", "6", "-",
    "7", "8", "9", "*",
    ".", "0", "/", "=",
  ];

  return (
    <div className="calculator-container">
      {<div className="result"> {input}<span>{active ? lastCharacter : ""}</span></div>}
      <div className="buttons">
        {buttons.map((button, index) => {
          let buttonElement;

          if (button === "ON") {
            buttonElement = (
              <button key={index} className="button" onClick={() => turnOn()}>
                {button}
              </button>
            );
          } else if (button === "OFF") {
            buttonElement = (
              <button key={index} className="button" onClick={() => turnOff()} disabled={!active}>
                {button}
              </button>
            );
          } else if (button === "DEL") {
            buttonElement = (
              <button key={index} className="button" onClick={() => handleDelete()} disabled={!active}>
                {button}
              </button>
            );
          } else if (button === "√") {
            buttonElement = (
              <button key={index} className="button" onClick={() => handleSqrt()} disabled={!active}>
                {button}
              </button>
            );
          } else if (button === "C") {
            buttonElement = (
              <button key={index} className="button" onClick={() => setInput("")} disabled={!active}>
                {button}
              </button>
            );
          } else if (button === "=") {
            buttonElement = (
              <button key={index} className="button" onClick={() => expCalculate()} disabled={!active}>
                {button}
              </button>
            );
          } else if (button === "x²") {
            buttonElement = (
              <button key={index} className="button" onClick={() => handlePow()} disabled={!active}>
                {button}
              </button>
            );
          } else {
            buttonElement = (
              <button key={index} className="button" onClick={() => addInput(button)} disabled={!active}>
                {button}
              </button>
            );
          }

          return buttonElement;
        })}
      </div>

    </div>
  );
};

export default Calculator;
