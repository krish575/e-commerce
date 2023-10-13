export default async function() {
    const allProducts = await fetch('https://fakestoreapi.com/products', {
        headers:{
            'Content-Type': 'Application/json',
        },
        method: 'GET',
    })
    return await allProducts.json();
}