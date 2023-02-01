import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Plus } from "../../assets/icons/plusBrown.svg";
import { BasketContext } from "../../store/BasketContext";

const MealItemForm = ({ id, title, price }) => {

  //console.log(title)
  
  const { addToBasket } = useContext(BasketContext);
  
  const [amount, setAmount] = useState(1);
  const amountChangeHandler = (e) => {
    setAmount(+e.target.value);
  };


  const submitHandler=(e)=>{
    e.preventDefault()

    const basketItem={
      id,
      title,
      price,
      amount,
    };

    console.log(basketItem);
    addToBasket({ basketItem})
  }

  return (
    <StyledMealForm onSubmit={submitHandler}>
      <StyledInput>
        <label htmlFor={id}> Amount </label>
        <InputStyled
          value={amount}
          onChange={amountChangeHandler}
          type="number"
          id={id}
          min={1}
          //defaultValue={1}
        />
      </StyledInput>
      <ButtonStyled>
        <PlusButton /> <span> Add</span>
      </ButtonStyled>
    </StyledMealForm>
  );
};

export default MealItemForm;

const StyledMealForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const StyledInput = styled.div`
  margin-bottom: 12px;

  & label {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
    margin-right: 16px;
  }
`;

const InputStyled = styled.input`
  width: 60px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid #d6d6d6;
  padding: 4px 12px;
`;

const ButtonStyled = styled.button`
  background-color: #8a2b06;
  padding: 10px 24px 10px 16px;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  border-radius: 20px;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  /*gap: 10px;*/

  & span {
    margin-left: 10px;
  }

  &:hover {
    background-color: #7e2a0a;
  }

  &:active {
    background-color: #993108;
  }
`;

const PlusButton = styled(Plus)`
   * {
    stroke: #ffffff;
    /*fill: #8a2b06;*/
  }
`;