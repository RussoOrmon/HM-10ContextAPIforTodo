import React from "react";
import styled from "styled-components";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";

const Basket = () => {
  const items = [
    {
      title: "Sushi",
      amount: 2,
      price: "22.99",
      id: "meal1",
    },
    {
      title: "Schnitzel",
      amount: 1,
      price: "16.99",
      id: "meal2",
    },
    {
      title: "Barbecue Burger",
      amount: 3,
      price: "12.99",
      id: "meal3",
    },
    {
      title: "Green Bowl",
      amount: 4,
      price: "19.99",
      id: "meal4",
    },
  ];

  return (
    <Modal onClose={() => {}}>
      <BasketStyled>
      {items.length ? <FixedWidthContainer>
      {items.map((item) => (
          <BasketItem
            key={item.id}
            title={item.title}
            price={item.price}
            amount={item.amount}
          />
        ))}
      </FixedWidthContainer> : null }
        <TotalAmount price={200.503} onClose={() => {}} />
      </BasketStyled>
    </Modal>
  );
};

export default Basket;

const BasketStyled = styled.div`
  padding: 0  1rem 1.5rem 1rem ;
  width: 100%;
  height: 100%;
  
`;

const FixedWidthContainer=styled.div`
  max-height: 243px;
  overflow-y : auto ;

`