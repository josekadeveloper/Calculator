import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState('');

  const addInput = (val: any) => {
    setInput(input + val);
  };

  const expCalculate = () => {
    input ? setInput(eval(input)) : alert("Please enter values to perform calculations.");
  };

  return (
    <div className="calculator-container">
      <div className="result">{input}</div>
      <button className="button" onClick={() => addInput(1)}>1</button>
      <button className="button" onClick={() => addInput(2)}>2</button>
      <button className="button" onClick={() => addInput(3)}>3</button>
      <button className="button" onClick={() => addInput("+")}>+</button>
      <button className="button" onClick={() => addInput(4)}>4</button>
      <button className="button" onClick={() => addInput(5)}>5</button>
      <button className="button" onClick={() => addInput(6)}>6</button>
      <button className="button" onClick={() => addInput("-")}>-</button>
      <button className="button" onClick={() => addInput(7)}>7</button>
      <button className="button" onClick={() => addInput(8)}>8</button>
      <button className="button" onClick={() => addInput(9)}>9</button>
      <button className="button" onClick={() => addInput("*")}>*</button>
      <button className="button" onClick={() => addInput(0)}>0</button>
      <button className="button" onClick={() => addInput(".")}>.</button>
      <button className="button" onClick={() => addInput("/")}>/</button>
      <button className="button" onClick={() => setInput("")}>C</button>
      <button className="button" onClick={() => expCalculate()}>=</button>
    </div>
  );
};

export default Calculator;
