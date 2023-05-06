import { useState } from "react";
import ReactModal from "react-modal";
import { FaTimes } from 'react-icons/fa';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [active, setActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const lastCharacter = "|";

  const addInput = (val: any) => {
    setInput(input + val);
  };

  const expCalculate = () => {
    input ? setInput(eval(input)) : openModal();
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

  const openModal = () => {
    setShowModal(true);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove('modal-open');
  };

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
      <ReactModal className="modal" overlayClassName="modal-overlay" isOpen={showModal} onRequestClose={() => setShowModal(false)}>
        <div className="modal-content">
          <h2>TIP</h2>
          <p>To display the result of any operation you need to select numbers and operator</p>
          <button className="close-button" onClick={closeModal}><FaTimes /></button>
        </div>
      </ReactModal >
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
