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
      const sendOrderURL = "https://mvctest.staging.psw.ro/";

      // define a order var for each entry from the cart
      const order = state.cart.map(entry => ({
        id: entry.product.id,
        quantity: entry.quantity
      }));
      // push new order to the orders
      state.orders.push({
        order
      });
      // sending the data to database
      fetch(sendOrderURL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(order)
      }).then(response => {
        if (response.status === 200) {
          console.log(response.status);
        } else {
          throw new Error("Something went wrong!!!!");
        }
      });

      // re-set the cart
      state.cart = [];
      break;

    case "products.update":
      state.products = data;
      break;

    default:
      throw Error("App: action type not found.");
  }
  console.log("Total orders:", state.orders);
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
