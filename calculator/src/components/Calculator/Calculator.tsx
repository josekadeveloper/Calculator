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

  return (
    <div className="calculator-container">
      {<div className="result"> {input}<span>{active ? lastCharacter : ""}</span></div>}
      <button className="button" onClick={() => turnOn()}>ON</button>
      <button className="button" onClick={() => turnOff()}>OFF</button>
      <button className="button" onClick={() => addInput(1)} disabled={!active}>1</button>
      <button className="button" onClick={() => addInput(2)} disabled={!active}>2</button>
      <button className="button" onClick={() => addInput(3)} disabled={!active}>3</button>
      <button className="button" onClick={() => addInput("+")} disabled={!active}>+</button>
      <button className="button" onClick={() => addInput(4)} disabled={!active}>4</button>
      <button className="button" onClick={() => addInput(5)} disabled={!active}>5</button>
      <button className="button" onClick={() => addInput(6)} disabled={!active}>6</button>
      <button className="button" onClick={() => addInput("-")} disabled={!active}>-</button>
      <button className="button" onClick={() => addInput(7)} disabled={!active}>7</button>
      <button className="button" onClick={() => addInput(8)} disabled={!active}>8</button>
      <button className="button" onClick={() => addInput(9)} disabled={!active}>9</button>
      <button className="button" onClick={() => addInput("*")} disabled={!active}>*</button>
      <button className="button" onClick={() => addInput(0)} disabled={!active}>0</button>
      <button className="button" onClick={() => addInput(".")} disabled={!active}>.</button>
      <button className="button" onClick={() => addInput("/")} disabled={!active}>/</button>
      <button className="button" onClick={() => setInput("")} disabled={!active}>C</button>
      <button className="button" onClick={() => expCalculate()} disabled={!active}>=</button>
    </div>
  );
};

export default Calculator;
