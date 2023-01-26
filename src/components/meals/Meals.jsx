import React from "react";
import styled from "styled-components";
import MealItem from "./MealItem";

const duumy_meals = [
  {
    title: "Sushi",
    description: "Finest fish and veggies",
    price: "22.99",
    id:'meal1'
  },
  {
    title: "Schnitzel",
    description: "A german speciality",
    price: "16.99",
    id:'meal2',
  },
  {
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: "12.99",
    id:'meal3',
  },
  {
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: "19.99",
    id:'meal4',
  },
];

const Meals = () => {
  return (
    <StyledMeals>
      <ul>
        {duumy_meals.map((meal) => {
          return (
            <MealItem key={meal.id}
              title={meal.title}
              description={meal.description}
              price={meal.price}
              id={meal.id}/>
          );
        })}
        
      </ul>
      
    </StyledMeals>
  );
};

export default Meals;

const StyledMeals = styled.div`
  background-color: #ffffff;
  width: 1039px;
  height: 564px;
  border-radius: 16px;
  margin:40px auto;
  padding: 40px 40px 36px 30px;
  
`;
