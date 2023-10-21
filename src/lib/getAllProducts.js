export default async function() {
    try {
        const allProducts = await fetch('https://fakestoreapi.com/products', {
        headers:{
            'Content-Type': 'Application/json',
        },
        method: 'GET',
    })
    return await allProducts.json();
    } catch (error) {
        console.error(error.message);
    }
}