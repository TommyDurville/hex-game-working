import { React, useState } from "react";
import styled from "styled-components";

const Correct = () => {
  const CorrectDiv = styled.h1`
    display: grid;
    justify-content: center;
    font-size: 32px;
    color: green;
  `;
  return <CorrectDiv>Correct, Let's Try Another!</CorrectDiv>;
};

export default Correct;
