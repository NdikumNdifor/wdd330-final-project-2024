import { loadHeaderFooter, getElement} from "./utils";
import { ExternalServices} from "./ExternalServices.mjs";
import { MovieWatchList} from "./MovieWatchList.mjs";

// const dataSource = new ExternalServices()
const parentElement = getElement(".watchList")

const ListOfSavedMovies = new MovieWatchList(parentElement)



const main = async () => {
    await loadHeaderFooter();
    await ListOfSavedMovies.init()
}

main()



// Gets an an object or an empty array where product would be pushed into
// and push the key value pair object into.
// function addProductToCart(product) {
//   const currentCart = getLocalStorage("so-cart") || [];
//   currentCart.push(product);
//   setLocalStorage("so-cart", currentCart);
// }
// add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addToCart(product);
// }

// add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);


