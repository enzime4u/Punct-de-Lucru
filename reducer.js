export default function reducer(previous, { type, data }) {
  const state = { ...previous };

  switch (type) {
    case "toggle.product.modal":
      return (state.modal.isOpen = !state.modal.isOpen);
      break;
    case "increment.product":

    default:
      throw Error("App: command not found.");
  }

  return state;
}

// Actions :
// -> Product
//     - showModal
// -> Modal
//     - closeModal
//     - addItemToCart
//     - incrementItemQty
//     - decrementItemQty

// -> Cart
//     - sendOrder
