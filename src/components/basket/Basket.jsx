import { useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";

import TotalAmount from "./TotalAmount";

const Basket = ({ onCloseBasket }) => {
  //const { items, updateBasketItem } = useContext(BasketContext);
  
  const items=[
      {
      title: "Sushi",
      description: "Finest fish and veggies",
      price: "22.99",
      id: "meal1",
      amount:2,
    },
    {
      title: "Schnitzel",
      description: "A german speciality",
      price: "16.99",
      id: "meal2",
      amount:3,
    },
    {
      title: "Barbecue Burger",
      description: "American, raw, meaty",
      price: "12.99",
      id: "meal3",
      amount:4,
    },
    {
      title: "Green Bowl",
      description: "Healthy...and green...",
      price: "19.99",
      id: "meal4",
      amount:2,
    },
  ];

  const closeModalBasket = () => {
    onCloseBasket();
  };

  const getTotalPrice = () => {
    return items.reduce((sum, { price, amount }) => sum + price * amount, 0);
  };

//const decrementAmount=(id, amount)=>{
//  if(amount > 1){
//    updateBasketItem({amount:amount -1, id})
//  }
//}

//const incrementAmount=(id, amount)=>{
//  updateBasketItem({amount: amount+1})
//}

  console.log(items);
  return (
    <Modal onClose={closeModalBasket}>
      <BasketStyled>
        {items.length ? (
          <FixedHeigthContainer>
            {items.map((item) => {
              return (
                <BasketItem
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  amount={item.amount}
                  decrementAmount={()=>{}}
                  incrementAmount={()=>{}}
                />
              );
            })}
          </FixedHeigthContainer>
        ) : null}
        <TotalAmount
          price={getTotalPrice()}
          onClose={onCloseBasket}
          onOrder={() => {}}
        />
      </BasketStyled>
    </Modal>
  );
};

export default Basket;

const BasketStyled = styled.div`
  padding: 0 1rem 1.5rem 1rem;
  width: 100%;
  height: 100%;
`;

const FixedHeigthContainer = styled.div`
  max-height: 243px;
  overflow-y: auto;
`;
