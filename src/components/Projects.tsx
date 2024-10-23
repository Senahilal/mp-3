import styled from "styled-components";
import { useState } from "react";

const StyledInputDiv =styled.div`
    font-size: calc(15px + 1vw);
`;

const StyledInput = styled.input`
    padding: calc(1px + 1vw) calc(1px + 2vw);
    border-radius: 5px;
    margin-bottom: 5px;
`;

const StyledButton = styled.button`
    text-align: center;
    background-color:#17252a;
    color:#def2f1;
    padding: calc(2px + 1vw) calc(1px + 2vw); 
    font-size: calc(2px + 1vw);
    margin: 5px;
    border-radius: 5px;
    cursor: pointer; /*When cursor is on the top of a button, it changes to a hand icon */
`;

export default function ExperiencePage() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");

    const handleCalculation = (operation: string) => {
        const first = Number(num1);
        const second = Number(num2);

        //Checking if numbers are valid
        if (isNaN(first) || isNaN(second)) {
            alert("Please enter valid numbers");
            setResult("Invalid number(s)");
            return;
        }
    
        let calculationResult;

        //Executing operations
        switch (operation) {
            case "+":
                calculationResult = first + second;
                break;
            case "-":
                calculationResult = first - second;
                break;
            case "*":
                calculationResult = first * second;
                break;
            case "/":
                if (second === 0) {
                    setResult("Zero cannot be the denominator");
                    return;
                }else{
                    calculationResult = first / second;
                }
                break;
            case "**":
                calculationResult = first ** second;
                break;
            
            //Program never reaches here
            default:
                calculationResult = "Invalid operation";
        }

        let result = String(calculationResult);
        setResult(result);
    };
    

    return (
    <>
        <StyledInputDiv>
            <p>1st Number: <StyledInput type="text" value={num1} 
                onChange={(e) => setNum1(e.target.value)}/></p>
            <p>2nd Number:<StyledInput type="text" value={num2} 
                onChange={(e) => setNum2((e.target.value))}/></p>
        </StyledInputDiv>
        
        <div id="buttons">
            <StyledButton onClick={() => handleCalculation("+")}> + </StyledButton>
            <StyledButton onClick={() => handleCalculation("-")}>-</StyledButton>
            <StyledButton onClick={() => handleCalculation("*")}>*</StyledButton>
            <StyledButton onClick={() => handleCalculation("/")}>/</StyledButton>
            <StyledButton onClick={() => handleCalculation("**")}>**</StyledButton>
            <StyledButton onClick={() => {setNum1(""); setNum2(""); setResult("");}}>Clear</StyledButton>
        </div>
        <p id="output" style={{color: result[0] === "-" ? "red" : "white"}}>{result}</p>
    </>
    );
}