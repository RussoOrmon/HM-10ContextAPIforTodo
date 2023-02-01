import { createContext, useEffect, useState } from "react";
import { fetchApi } from "../lib/fetchAPI";

export const BasketContext = createContext({
  items: [],
});

export const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const updateBasketItem =async ({ id, amount })=>{

    try {
      const { data } = await fetchApi(`basketItem/${id}/update`, { method: 'PUT',  body:{amount}} );
      setItems(data.items);
    } catch (error) {
      console.log(error);
    }
  };
  

  const getBasket = async () => {
    try {
      const { data } = await fetchApi("basket");
      setItems(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBasket();
  }, []);

  const addToBasket = async (newItem) => {
    //try {
    
    //  const res = await fetchApi(`foods/${newItem.id}/addToBasket`, {
    //    method: "POST",
    //    body: { amount: newItem.amount },
    //  });
    
    //  setItems(res.data.items);
    
    //} catch (error) {
    //  console.log(error);
    //}

    setItems((prev) => {
      const doesItemExist = prev.find((oldItem) => oldItem.id === newItem.id);

      if (!doesItemExist) {
        return [...prev, newItem];
      }

      const updatedItems = prev.map((oldItem) => {
        if (oldItem.id === newItem.id) {
          oldItem.amount = oldItem.amount + newItem.amount;
        }
        return oldItem;
      });
      return updatedItems;
    });
  };

  const state = {
    items,
    addToBasket,
    updateBasketItem,
  };

  return (
    <BasketContext.Provider value={state}>{children} </BasketContext.Provider>
  );
};
