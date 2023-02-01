import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Basket from "./components/basket/Basket";
import BasketItem from "./components/basket/BasketItem";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import Summary from "./components/summary/Summary";
import { BasketProvider } from "./store/BasketContext";

function App() {
  const [isBasketVisible, setIsBasketVisible] = useState(false);

  const showBasketHandler = () => {
    setIsBasketVisible((prev) => !prev);
  };

  return (
    //<div className="App">
      <BasketProvider>
        <Header onShowBasket={showBasketHandler} />
        {isBasketVisible && <Basket onCloseBasket={showBasketHandler}   />}
        <Content>
          <Summary />
          <Meals />
        </Content>
      </BasketProvider>
    //</div>
  );
}

export default App;

const Content = styled.div`
  margin-top: 101px;
`;


/*
GET  /foods
Headers:{ UserID: "russoOrmon" }

GET  /basket
Headers:{ UserID: "russoOrmon" }

POST  /foods/:foodId/addToBasket
BODY:{ amount:number }
Headers:{ UserID: "russoOrmon" }

PUT  /basketItem/:id/update
BODY: {amount:number}
Headers:{ UserID: "russoOrmon" }


DELETE  /basketItem/:id/delete
Headers:{ UserID: "russoOrmon" }



*/