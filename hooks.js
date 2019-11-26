import React, { useState, useReducer } from "react";
import { orders } from "./Items";

// APP - hook
// call the hook before return ( in render)
// Component 1
// Component2
//    - SubComp1
//    - SubComp2

//  inputs to your fn - Hooks

export const useCurrentItem = () => {
  const [currentItem, incrementCurrentItem] = useReducer(
    (currentItem, { step, id }) => {
      if (currentItem.id === id) {
        return {
          ...currentItem,
          quantity: Math.max(currentItem.quantity + step, 0)
        };
      }

      return {
        id,
        quantity: Math.max(step, 0)
      };
    },
    {
      id: null,
      quantity: 1
    }
  );

  return { currentItem, incrementCurrentItem };
};

export const useCart = () => {
  const [cart, addItemToCart] = useReducer(
    (cart, item) => ({
      ...cart,
      [item.id]: (cart[item.id] || 0) + item.quantity
    }),
    {}
  );

  return {
    cart, // this is also order !!!
    addItemToCart
  };
};

//create useOrder
// must declare order and addOrderToDeposit
// order is a state var keeps the current order
// addOrderToDeposit is a function that sends the currrent order to the orders array
