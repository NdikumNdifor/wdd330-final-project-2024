import { getLocalStorage} from "./utils";

function watchListMovieTemplate(movie){
    const imageUrl = `https://image.tmdb.org/t/p/w92${movie.poster_path}`;
    return `<li id="watchlist-movie">
            <div>
                <img src="${imageUrl}" alt="${movie.name}"/>
            </div>
            <div>
                <p ><strong>Original title</strong>: <span class="text-details">${movie.original_title}</span></p>
                <p class="top"><strong>Original language</strong>: <span class="text-details">${movie.original_language}</span></p>
                <p class="top"><strong>Released date</strong>: <span class="text-details">${movie.release_date}</span></p>
            </div>
          </li>`;
}

export class MovieWatchList {
    constructor(parentElement){
        // this.dataSource = dataSource;
        this.parentElement = parentElement; 
    }

    async init(){
        await this.renderWatchListContent();
    }

    async renderWatchListContent(){
        const movieList = getLocalStorage("so-movie") || [];
        this.parentElement.innerHTML = "";
        const htmlItems = movieList.map((movie) => watchListMovieTemplate(movie));
        // this.parentElement.insertAdjacentHTML("afterbegin", htmlItems.join(""))
        this.parentElement.innerHTML = htmlItems;
    }
}
