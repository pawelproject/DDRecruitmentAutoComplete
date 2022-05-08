import React, { useEffect, useRef, useState } from "react";
import "./AutoCompleteInput.css";

const AutoCompleteInput = ({ options, label, name }) => {
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const [autoCompleteOptions, setAutoCompleteOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [activeOption, setActiveOption] = useState(0);
  const containerRef = useRef();

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setAutoCompleteOptions(filteredOptions);
    setShowAutoComplete(true);
    setActiveOption(0);
  };

  const setValueFromSuggestions = (value) => {
    setInputValue(value);
    setShowAutoComplete(false);
  };

  const handleKeyDown = (e) => {
    // arrow down
    if (e.keyCode === 40) {
      if (activeOption === autoCompleteOptions.length - 1) {
        setActiveOption(0);
      } else {
        setActiveOption((prev) => prev + 1);
      }
    }
    // arrow up
    if (e.keyCode === 38) {
      if (activeOption === 0) {
        setActiveOption(autoCompleteOptions.length - 1);
      } else {
        setActiveOption((prev) => prev - 1);
      }
    }
    // enter
    if (e.keyCode === 13) {
      e.preventDefault();
      if (autoCompleteOptions.length > 0) {
        setValueFromSuggestions(autoCompleteOptions[activeOption]);
      }
    }
  };

  const handleClickOutside = (e) => {
    if (!containerRef.current.contains(e.target)) {
      setShowAutoComplete(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div className="autocomplete-container" ref={containerRef}>
      <label>{label}</label>
      <input
        id={name}
        name={name}
        value={inputValue}
        onChange={inputChangeHandler}
        onKeyDown={handleKeyDown}
        type="text"
      ></input>

      {showAutoComplete && (
        <div className="autocomplete-items">
          {autoCompleteOptions.map((option, i) => (
            <div
              key={i}
              className={activeOption === i ? "autocomplete-active" : ""}
              onClick={() => {
                setValueFromSuggestions(option);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoCompleteInput;
