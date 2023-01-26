import React from "react";
import styled from "styled-components";
import MainImage from "../../assets/images/mainImg.jpg";
import Inform from "../inform/Inform";

const Summary = () => {
  return (
    <Container>
      <StyledImg src={MainImage} alt="summary" />
      <Inform />
    </Container>
  );
};

export default Summary;

const Container = styled.div`
  height: 527px;
`;

const StyledImg = styled.img`
  height: 432px;
  width: 100%;
`;
