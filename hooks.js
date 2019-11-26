import React, { useReducer } from "react";

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
    cart,
    addItemToCart
  };
};

export const useOrder = () => {
  const [order, addOrderToDeposit] = useReducer((order, item) => ({
    ...order
  }));
};
