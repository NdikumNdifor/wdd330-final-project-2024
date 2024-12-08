import { getElement, loadHeaderFooter, getParams } from "./utils";
import { ProductDetails } from "./ProductDetails.mjs";
import { ExternalServices } from "./ExternalServices.mjs";

const productId = getParams("details");
const parentElement = getElement(".product");
const dataSource = new ExternalServices();

const detailProduct = new ProductDetails(dataSource, productId, parentElement);

const main = async () => {
  await loadHeaderFooter();
  await detailProduct.init();
};

main();
