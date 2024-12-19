import { getElement, loadHeaderFooter, getParams } from "./utils.mjs";
import { ProductDetails } from "./ProductDetails.mjs";
import { ExternalServices } from "./ExternalServices.mjs";
import { SuperScript } from "./SuperScript.mjs";

const productId = getParams("details");
const parentElement = getElement(".product");
const dataSource = new ExternalServices();

const detailProduct = new ProductDetails(dataSource, productId, parentElement);

const superscript = new SuperScript()

const main = async () => {
  await loadHeaderFooter();
  await detailProduct.init();

  superscript.init();
};

main();
