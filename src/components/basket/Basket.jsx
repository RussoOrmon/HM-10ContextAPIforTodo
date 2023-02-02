import { useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";

import TotalAmount from "./TotalAmount";

const Basket = ({ onCloseBasket }) => {
  const { items, updateBasketItem, deleteBasketItem } = useContext(BasketContext);
  
  const closeModalBasket = () => {
    onCloseBasket();
  };

  const getTotalPrice = () => {
    return items.reduce((sum, { price, amount }) => sum + price * amount, 0);
  };

const decrementAmount=(id, amount)=>{
  if(amount > 1){
    updateBasketItem({amount: amount-1, id})
  }else{
    deleteBasketItem(id)
  }
}

const incrementAmount=(id, amount)=>{
  updateBasketItem({amount: amount+1, id})
}

  console.log(items);
  return (
    <Modal onClose={closeModalBasket}>
      <BasketStyled>
        {items.length ? (
          <FixedHeigthContainer>
            {items.map((item) => {
              return (
                <BasketItem
                  key={item._id}
                  title={item.title}
                  price={item.price}
                  amount={item.amount}
                  decrementAmount={()=>decrementAmount(item._id,  item.amount)}
                  incrementAmount={()=>incrementAmount(item._id,  item.amount)}
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
