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
      state.orders.push({
        id: "xxx",
        products: state.cart
      });
      state.cart = [];
      break;

    case "products.update":
      state.products = data;
      break;
    default:
      throw Error("App: command not found.");
  }

  console.log(state.orders);
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
