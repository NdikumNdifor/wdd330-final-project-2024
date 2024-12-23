import { loadHeaderFooter, getElement } from "./utils";
import { ExternalServices } from "./ExternalServices.mjs";
import { ProductListing } from "./ProductList.mjs";
import { LocalJsonData } from "./localData.mjs";
import Alert from "./Alerts.mjs";
import { SuperScript } from "./SuperScript.mjs";


// Creating an instance of external service class to
// call the get movies method for movie data
const dataSource = new ExternalServices();
// const dataSource = externalServices.getMovies();

// Grabs an element on the DOM
const listElement = getElement(".product-listing");

// Instantiate the product list class to render the product
// in the defined template
const products = new ProductListing(dataSource, listElement);


const localDataSource = new LocalJsonData("announcement");
const alertMessages = new Alert( localDataSource)

const superscript = new SuperScript();


async function main() {
  // Loads the header and footer
  await loadHeaderFooter();

  // Use object to call the init method that renders template
  await products.init();

  await alertMessages.init();

  superscript.init();
  
}

// calls the function called main
main();
