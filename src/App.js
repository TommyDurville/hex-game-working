import styled from "styled-components";
import React, { useEffect, useState } from "react";

import Incorrect from "./components/Incorrect";
import Correct from "./components/Correct";

function App() {
  const [finishedGame, setFinishedGame] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const ColorBox = styled.div`
    width: 600px;
    height: 300px;
    background-color: ${() => colourOne};
  `;

  const CentralDiv = styled.div`
    display: grid;
    justify-content: center;
  `;

  const CorrectDiv = styled.div`
    display: grid;
    justify-content: center;
  `;

  const ColourButton = styled.button`
    margin: 20px;
    width: 160px;
    height: 50px;
    border: 0px;
    border-radius: 5px;
    font-size: 24px;
    font-weight: 600;
  `;

  let colourOne =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  let colourTwo =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  let colourThree =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  const colourArray = [colourOne, colourTwo, colourThree];
  let ranNums = [];
  let i = colourArray.length;
  let j = 0;
  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    ranNums.push(colourArray[j]);
    colourArray.splice(j, 1);
  }

  const checkResult = (buttonNumber) => {
    if (ranNums[buttonNumber] == colourOne) {
      console.log("Correct");
      setIsCorrect(true);
      setFinishedGame(true);
    } else {
      console.log("Incorrect");
      setIsCorrect(false);
      setFinishedGame(true);
    }
  };

  if (finishedGame) {
    let colourOne =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
    let colourTwo =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
    let colourThree =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
    const colourArray = [colourOne, colourTwo, colourThree];
    let ranNums = [];
    let i = colourArray.length;
    let j = 0;
    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      ranNums.push(colourArray[j]);
      colourArray.splice(j, 1);
    }
    setFinishedGame(false);
  }

  return (
    <CentralDiv>
      <h1 style={{ textAlign: "center" }}>Hex Colour Quiz</h1>
      <ColorBox></ColorBox>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ColourButton buttonColour={ranNums[0]} onClick={() => checkResult(0)}>
          {ranNums[0]}
        </ColourButton>
        <ColourButton buttonColour={ranNums[1]} onClick={() => checkResult(1)}>
          {ranNums[1]}
        </ColourButton>
        <ColourButton buttonColour={ranNums[2]} onClick={() => checkResult(2)}>
          {ranNums[2]}
        </ColourButton>
      </div>
      {!isCorrect && <Incorrect />}
      {isCorrect && <Correct />}
    </CentralDiv>
  );
}

export default App;
