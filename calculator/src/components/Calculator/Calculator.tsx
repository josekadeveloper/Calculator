import React, { useState } from "react";
import { ADD_OPERATOR, SUBTRACT_OPERATOR, MULTIPLY_OPERATOR, DIVIDE_OPERATOR } from "../../utils/Operator";

const Calculator = () => {
  const [input, setInput] = useState<string>("");
  const [previousNumber, setPreviousNumber] = useState<number | null>(null);
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);
  const [operator, setOperator] = useState<String | null>(null);

  const handleNumberClick = (number: number) => {
    setInput(input + number);
    setCurrentNumber(parseFloat(input + number));
  };

  const handleOperatorClick = (operator: String) => {
    if (currentNumber !== null) {
      if (previousNumber === null) {
        setPreviousNumber(currentNumber);
      } else {
        switch (operator) {
          case ADD_OPERATOR:
            setPreviousNumber(previousNumber + currentNumber);
            break;
          case SUBTRACT_OPERATOR:
            setPreviousNumber(previousNumber - currentNumber);
            break;
          case MULTIPLY_OPERATOR:
            setPreviousNumber(previousNumber * currentNumber);
            break;
          case DIVIDE_OPERATOR:
            setPreviousNumber(previousNumber / currentNumber);
            break;
        }
      }
    }

    setInput("");
    setOperator(operator);
  };

  const handleClearClick = () => {
    setInput("");
    setPreviousNumber(null);
    setCurrentNumber(null);
    setOperator(null);
  };

  const handleEqualClick = () => {
    let result = 0;
    if (currentNumber !== null && previousNumber !== null && operator !== null) {
      switch (operator) {
        case ADD_OPERATOR:
          result = previousNumber + currentNumber;
          setInput(`(${previousNumber} ${operator} ${currentNumber}) = ${result}`);
          break;
        case SUBTRACT_OPERATOR:
          result = previousNumber - currentNumber;
          setInput(`(${previousNumber} ${operator} ${currentNumber}) = ${result}`);
          break;
        case MULTIPLY_OPERATOR:
          result = previousNumber * currentNumber;
          setInput(`(${previousNumber} ${operator} ${currentNumber}) = ${result}`);
          break;
        case DIVIDE_OPERATOR:
          result = previousNumber / currentNumber;
          setInput(`(${previousNumber} ${operator} ${currentNumber}) = ${result}`);
          break;
      }

      setCurrentNumber(result);
      setPreviousNumber(null);
      setOperator(null);
    }
  };

  return (
    <div className="calculator-container">
      <div className="result">{input}</div>
      <button className="button" onClick={() => handleNumberClick(1)}>1</button>
      <button className="button" onClick={() => handleNumberClick(2)}>2</button>
      <button className="button" onClick={() => handleNumberClick(3)}>3</button>
      <button className="button" onClick={() => handleNumberClick(4)}>4</button>
      <button className="button" onClick={() => handleNumberClick(5)}>5</button>
      <button className="button" onClick={() => handleNumberClick(6)}>6</button>
      <button className="button" onClick={() => handleNumberClick(7)}>7</button>
      <button className="button" onClick={() => handleNumberClick(8)}>8</button>
      <button className="button" onClick={() => handleNumberClick(9)}>9</button>
      <button className="button" onClick={() => handleNumberClick(0)}>0</button>
      <button className="button" onClick={() => handleOperatorClick("+")}>+</button>
      <button className="button" onClick={() => handleOperatorClick("-")}>-</button>
      <button className="button" onClick={() => handleOperatorClick("*")}>*</button>
      <button className="button" onClick={() => handleOperatorClick("/")}>/</button>
      <button className="button" onClick={() => handleClearClick()}>C</button>
      <button className="button" onClick={() => handleEqualClick()}>=</button>
    </div>
  );
};

export default Calculator;
