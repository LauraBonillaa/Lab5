export const getProducts = async () => {
    try {
        const productsdata = await fetch("https://fakestoreapi.com/products").then(res => res.json());
        console.log(productsdata)
        return productsdata ;
    } catch (error) {
        console.error(error);
    }
}