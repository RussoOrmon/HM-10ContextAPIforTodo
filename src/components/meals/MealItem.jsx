import styled from "styled-components";

import MealItemForm from "./MealItemForm";

const MealItem = ({ title, description, price, id }) => {
  return (
    <StyledMealItem>
      <StyledItemInfo>
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{description}</StyledText>
        <span>$ {price}</span>
      </StyledItemInfo>
      <MealItemForm id={id} title={title} price={price} />
    </StyledMealItem>
  );
};

export default MealItem;

const StyledMealItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d6d6d6;
  margin-bottom: 16px;
  text-align: start;
  :last-child {
    border: none;
    margin-bottom: 36px;
  }
`;

const StyledItemInfo = styled.div`
  margin-bottom: 20px;

  & span {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #ad5502;
  }
`;

const StyledTitle = styled.h4`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  margin: 0;
`;

const StyledText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 4px 0;
  font-style: italic;
`;
