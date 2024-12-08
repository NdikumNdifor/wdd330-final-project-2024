import { renderListWithTemplate } from "./utils";
// import { ExternalServices } from "./ExternalServices.mjs";

// A template that displays an image and name of a movie
function productTemplate(product){
  const imageUrl = `https://image.tmdb.org/t/p/w185${product.poster_path}`;
  return `  
        <li>
          <a href="../product-page/index.html?details=${product.id}">
              <img src="${imageUrl}" alt="${product.original_name}"></img>
              <p id="title">${product.title}</p>
          </a>
        </li>`;
}

export class ProductListing {
  constructor(dataSource, listElement){
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init(){

    const list = await this.dataSource.getMovies();

    this.renderList(list)
  }

  async renderList(list){
    renderListWithTemplate(productTemplate, list, this.listElement)
  }
}