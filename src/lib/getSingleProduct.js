export default async function getSingleProduct(id) {
  const product = await fetch(`https://fakestoreapi.com/products/${id}`, {
    headers: {
      "Content-Type": "Application/json",
    },
    method: "GET",
  });
  return await product.json();
}
