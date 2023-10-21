export default function priceSorting(array) {
    const sortedPrices = array.slice().sort((a, b) => a.price - b.price)
    console.log('sortedPrices',sortedPrices)
    return sortedPrices;
}