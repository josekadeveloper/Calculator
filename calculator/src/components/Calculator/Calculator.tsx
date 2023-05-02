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
    if (currentNumber !== null && previousNumber !== null && operator !== null) {
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

      setInput(previousNumber.toString());
      setCurrentNumber(previousNumber);
      setOperator(null);
    }
  };

  return (
    <div>
      <div>{input}</div>
      <button onClick={() => handleNumberClick(1)}>1</button>
      <button onClick={() => handleNumberClick(2)}>2</button>
      <button onClick={() => handleNumberClick(3)}>3</button>
      <button onClick={() => handleOperatorClick("+")}>+</button>
      <br />
      <button onClick={() => handleNumberClick(4)}>4</button>
      <button onClick={() => handleNumberClick(5)}>5</button>
      <button onClick={() => handleNumberClick(6)}>6</button>
      <button onClick={() => handleOperatorClick("-")}>-</button>
      <br />
      <button onClick={() => handleNumberClick(7)}>7</button>
      <button onClick={() => handleNumberClick(8)}>8</button>
      <button onClick={() => handleNumberClick(9)}>9</button>
      <button onClick={() => handleOperatorClick("*")}>*</button>
      <br />
      <button onClick={() => handleNumberClick(0)}>0</button>
      <button onClick={() => handleClearClick()}>C</button>
      <button onClick={() => handleEqualClick()}>=</button>
      <button onClick={() => handleOperatorClick("/")}>/</button>
    </div>
  );
};

export default Calculator;
