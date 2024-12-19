import { setLocalStorage, getLocalStorage} from "./utils.mjs";
// product details template structure 
function productDetailsTemplate(product){
    const imageUrl = `https://image.tmdb.org/t/p/w342${product.poster_path}`;
    return `<li>
              <div id="product-img">
                <img src="${imageUrl}" alt="${product.original_title}" ></img>
              </div>
            </li>
            <div id= "detail-info">
                <p ><strong>Original title</strong>: <span class="text-details">${product.original_title}</span></p>
                <p class="top"><strong>Original language</strong>: <span class="text-details">${product.original_language}</span></p>
                <p class="top"><strong>Released date</strong>: <span class="text-details">${product.release_data}</span></p>
                <p class="top"><strong>Budget</strong>: <span class="text-details">${product.budget}</span></p>
                <p class="top"><strong>Revenue</strong>: <span class="text-details">${product.revenue}</span></p>
                <p class="top"><strong>Genre</strong>: <span class="text-details">${product.genres[0].name}, ${product.genres[1].name}</span></p>
                <div id="overview">
                    <p id="description"><strong>Description:</p></strong>
                    <p class="top"><span class="text-details">${product.overview}</span></p>
                </div>

                <div class="add-movie">
                    <button id="addToWatchList" data-id="${product.id}">Save To Watch List</button>
                </div>
            </div>`
}

// product details class structure
export class ProductDetails {
    constructor(dataSource, productId, parentElement){
        this.product = {}
        this.productId = productId;
        this.dataSource = dataSource;
        this.parentElement = parentElement;
    }

    async init(){
        // Stores a product based on it's Id
        this.product = await this.dataSource.getMoviesById(this.productId)

        // Calls renderMovieDetails function to render the details of a movie
        await this.renderMovieDetails(this.product)

        document
                .getElementById("addToWatchList")
                .addEventListener("click", this.addMovieToWatchList(this.product))
       
    }

    addMovieToWatchList(product){
        const movieList = getLocalStorage("so-movie") || [];
        movieList.push(product);
        setLocalStorage("so-movie", movieList);
    }


    async renderMovieDetails(product){
        this.parentElement.insertAdjacentHTML("afterBegin", productDetailsTemplate(product))
    }

}