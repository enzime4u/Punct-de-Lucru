import React, { useReducer } from "react";
import { render } from "react-dom";

const useCart = () => {
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

const useCurrentItem = () => {
  const [currentItem, incrementCurrentItem] = useReducer(
    (currentItem, { step, id }) => {
      if (currentItem.id === id) {
        return {
          ...currentItem,
          quantity: currentItem.quantity + step
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

function Cart({ cart, items }) {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {Object.keys(cart).map(id => (
          <li key={id}>
            {items[id]}: {cart[id]}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Items({ items, incrementCurrentItem }) {
  return (
    <div>
      <h2>Items</h2>
      <ul>
        {Object.keys(items).map(id => (
          <li onClick={() => incrementCurrentItem({ id, step: 0 })}>
            {items[id]}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ItemModal({
  currentItem,
  items,
  incrementCurrentItem,
  addItemToCart
}) {
  return (
    <form>
      <h2>Add to Cart</h2>
      <label>
        {items[currentItem.id]}: {currentItem.quantity}
      </label>
      <button
        type="button"
        onClick={() => incrementCurrentItem({ id: currentItem.id, step: 1 })}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => incrementCurrentItem({ id: currentItem.id, step: -1 })}
      >
        -
      </button>
      <button
        onClick={() => {
          addItemToCart(currentItem);
          incrementCurrentItem({ id: null, step: 0 });
        }}
      >
        Add
      </button>
    </form>
  );
}

function App({ items }) {
  const { cart, addItemToCart } = useCart();
  const { currentItem, incrementCurrentItem } = useCurrentItem();

  if (currentItem.id !== null) {
    return (
      <ItemModal
        currentItem={currentItem}
        items={items}
        incrementCurrentItem={incrementCurrentItem}
        addItemToCart={addItemToCart}
      />
    );
  }

  return (
    <div>
      <Items items={items} incrementCurrentItem={incrementCurrentItem} />
      <Cart items={items} cart={cart} />
    </div>
  );
}

render(
  <App
    items={{
      "1": "React is Awesome",
      "2": "Typescript is Cool"
    }}
  />,
  document.getElementById("app")
);
