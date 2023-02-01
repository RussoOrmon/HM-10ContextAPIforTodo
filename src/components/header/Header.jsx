import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";

import BasketButton from "./BasketButton";

const Header = ({ onShowBasket }) => {

  const { items } = useContext(BasketContext);
  
  const [animationClass, setAnimationClass] = useState("");

  const calculateTotalAmount = () => {
    const sum = items.reduce((a, item) => {
      return a + item.amount;
    }, 0);
    //console.log(sum)

    return sum;
  };

  useEffect(() => {
    setAnimationClass("bump");

    const id = setTimeout(() => {
      setAnimationClass("");
    }, 300);

    return () => {
      clearTimeout(id);
    };
  }, [items]);

  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketButton
      
        className="bump"      //{animationClass}
        onShowBasket={onShowBasket}
        count={calculateTotalAmount()}
      />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  position: fixed;
  z-index: 11;
  top: 0;
  background-color: #8a2b06;
  display: flex;
  justify-content: space-between;
  padding: 22px;
  padding-left: 120px;
  padding-right: 120px;
  align-items: center;
  color: white;

  /*&.bump {
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
  }*/
`;
const Logo = styled.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  margin: 0;
  color: #ffffff;
`;
