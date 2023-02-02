import React from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/basketIcon.svg";

const BasketButton = ({ count, onShowBasket, className }) => {

  return (
    <BasketButtonStyled  className={className} onClick={onShowBasket}   >
      <BasketIcon />
      <span>Your Cart</span>
      <StyledCounter id="counter" > {count || 0} </StyledCounter>
    </BasketButtonStyled>
  );
};

export default BasketButton;

const BasketButtonStyled = styled.button`
  background-color: #5a1f08;
  padding: 12px 12px 12px 24px ;
  color: white;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  border-radius: 30px;
  border: none;
  display: flex;
  align-items: center;

  &.bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }


  &:hover {
    background-color: #2c0d00;
  }
  &:hover >#counter {
    background-color: #672003;
  }

  & span {
    margin-left: 12px;
    margin-right: 15px;
  }



`;

const StyledCounter = styled.span`
  padding: 4px 20px ;
  background: #8a2b06;
  border-radius: 30px;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;



`;
