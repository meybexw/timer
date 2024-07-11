import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(true);

  const startTimer = () => setTimer(true);
  const stopTimer = () => setTimer(false);

  useEffect(() => {
    if (timer) {
      return;
    }

    const intervalId = setInterval(() => {
      setSeconds((count) => count + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  return (
    <StyledContainer>
      <p>{seconds} секунд </p>
      <StyledButton onClick={stopTimer}>start</StyledButton>
      <StyledButton2 onClick={startTimer}>stop</StyledButton2>
    </StyledContainer>
  );
};

export default Timer;

const StyledContainer = styled.div`
  width: 350px;
  height: 150px;
  background-color: #7aa4ca;
  text-align: center;
`;
const StyledButton = styled.button`
  width: 100px;
  height: 35px;
  background-color: #37cf37;
  border-radius: 12px;
`;
const StyledButton2 = styled.button`
  width: 100px;
  height: 35px;
  background-color: #dc0000;
  border-radius: 12px;
`;
