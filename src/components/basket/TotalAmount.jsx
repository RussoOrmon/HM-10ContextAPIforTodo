import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const TotalAmount = ({ price, onClose, onOrder }) => {
  const orderButton =
    price > 0 ? <Button onClick={onOrder}> Order </Button> : null;

  const fixedPrice = price.toFixed(2);
  return (
    <>
      <InfoConteiner>
        <Label>Total amount</Label>
        <StyledPrice>$ {fixedPrice}</StyledPrice>
      </InfoConteiner>
      <ActionButton>
        <Button onClick={onClose} variant="outlined">
          Close
        </Button>
        {orderButton}
      </ActionButton>
    </>
  );
};

export default TotalAmount;

const Label = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #222222;
  margin: 0;
`;

const StyledPrice = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #8a2b06;
  margin: 0;
`;
const InfoConteiner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ActionButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  gap: 1rem;
  & button {
    border-radius: 20px;
  }
`;
