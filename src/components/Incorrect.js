import { React, useState } from "react";
import styled from "styled-components";

const Incorrect = () => {
    const IncorrectDiv = styled.h1`
    display: grid;
    justify-content: center;
    font-size: 32px;
    color: red;
  `;
  return (  
     <IncorrectDiv>That's Not Right, Let's Try Again!</IncorrectDiv>
       )

};

export default Incorrect;
