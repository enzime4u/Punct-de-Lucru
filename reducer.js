export default function reducer(previous, { type, data }) {
  const state = { ...previous };

  switch (type) {
    case "cart.update":
      const { product, quantity } = data;
      const hasItems = state.cart.length;
      const inCart = state.cart.some(entry => entry.product.id == product.id);

      // add to cart
      if (!hasItems || !inCart) {
        state.cart.push({ product, quantity });
      }
      // update product quantity
      else {
        const entry = state.cart
          .filter(entry => entry.product.id == product.id)
          .pop();

        entry.quantity = quantity;
      }
      break;

    case "orders.update":
      const sendOrderURL =
        "https://mvctest.staging.psw.ro/application/save-order";

      const order = state.cart.map(entry => ({
        id: entry.product.id,
        quantity: entry.quantity
      }));
      state.orders.push({ order });

      fetch(sendOrderURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order)
      })
        .then(response => response.json())
        .then(data => console.log("from data:", data));

      // re-set the cart
      state.cart = [];
      break;

    case "products.update":
      state.products = data;
      break;

    default:
      throw Error("App: action type not found.");
  }
  return state;
}

// Actions :
// -> Product
//     - open.modal
//     - close.modal
// -> Modal
//     - closeModal ???
//     - addItemToCart
//     - incrementItemQty
//     - decrementItemQty

// -> Cart
//     - sendOrderToDeposit

// stage 1- useState
// stage2 - useReducer
// stage3 - use Multiple Stores !!!
