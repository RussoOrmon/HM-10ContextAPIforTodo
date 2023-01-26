import React from "react";
import styled from "styled-components";

const Inform = () => {
  return (
    <Container>
      <StyledTitle>Delicios  food , delivered to you</StyledTitle>

      <p>
        Choose your favorite meal from our broad selection of available meals and
        enjoi a delicious lunch or dinner at home
      </p>

      <p>

        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </Container>
  );
};

export default Inform;

const Container = styled.div`
  width: 854px;
  height: 270px;
  margin: 0 auto;
  border-radius: 16px;
  background-color: #383838;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  color: #ffffff;
  padding: 25px 56px;
  position: relative;
  top: -11rem;
  z-index: 10px;

  & p {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
  }
`;
const StyledTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  line-height: 54px;
  font-style: normal;
`;
