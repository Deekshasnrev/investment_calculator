import Calculator from "./components/calculator"
import Result from "./components/Result";
import { useState } from "react";

function App() {

  const [inputValue, setInputValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = inputValue.duration >= 1 
  function handleChange(inputIdentifier, newValue) {
    setInputValue((prevValue) => {
      return {
        ...prevValue,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
    <Calculator inputValue={inputValue} onChange={handleChange}/>
    {!inputIsValid && <p className="center">Please enter duration greater than zero.</p>}
    {inputIsValid && <Result input={inputValue}/>}
    </>
  )
}

export default App
