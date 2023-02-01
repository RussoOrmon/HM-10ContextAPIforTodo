import React, { useContext } from "react";
import Button from "../UI/Button";
import styled from "styled-components";
import { ReactComponent as Minus } from "../../assets/icons/minusBrown.svg";
import { ReactComponent as Plus } from "../../assets/icons/plusBrown.svg";
import { BasketContext } from "../../store/BasketContext";


const BasketItem = ({ id, title, price, amount, incrementAmount, decrementAmount }) => {

  console.log("URAAAA", title)
  console.log("URAAAA", amount)
  
  return (
    <Container  >
      <Title> {title} </Title>
      <Content  >
        <PriceAndAmount>
          <Price>$ {price}</Price>
          <Amount>x{amount}</Amount>
        </PriceAndAmount>
        <CounterConteiner>
          <Button borderStyle="squared" variant="outlined" onClick={decrementAmount}  >
            <MinusButton />
          </Button>

          <Button onClick={incrementAmount}  borderStyle="squared" variant="outlined">
            <PlusButton className="plus" />
          </Button>
        </CounterConteiner>
      </Content>
    </Container>
  );
};

export default BasketItem;

const Container = styled.div`
  padding: 20px 0 12px 0;
  width: 98%;
  border-bottom: 1px solid 
#D6D6D6 ;
`;
const Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
  margin: 0 0 12px 0;
`;
const Price = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ad5502;
`;

const Amount = styled.span`
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  padding: 6px 14px;
  display: block;
`;

const PriceAndAmount = styled.div`
  display: flex;
  align-items: center;
  min-width: 153px;
  justify-content: space-between;
`;

const CounterConteiner = styled.div`
  display: flex;
  gap: 14px;
  

  & button {
    padding: 14px 16px;
    width: 48px;
    height: 36px;
    border: 1px solid #8a2b06;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
  }

`;

const PlusButton = styled(Plus)`
  :hover > * {
    stroke: white;
    fill: white;
  }
`;
const MinusButton = styled(Minus)`
  :hover * {
    stroke: white;
    fill: white;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
