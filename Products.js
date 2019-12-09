export default function products() {
  const getProductsURL =
    "https://mvctest.staging.psw.ro/application/get-products";

  return fetch(getProductsURL).then(reply => reply.json());
}

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(data), 1000);
