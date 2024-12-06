const API_KEY = "f183da86323e949aa576ab9ba89754ca";
const BASE_URL = "https://api.themoviedb.org/3/";
// Convert server response to json and
// throw an error if there is a problem with the response
async function convertToJson(res) {
    const responseJSON = await res.json();
    if(res.ok) {
        return responseJSON
    }else{
        throw{name: "errorServices", mesage:responseJSON}
    } 
}

// Class use to access data from data from the server
// to get top rated movies and get movies by their ID
export class ExternalServices {
    constructor(){   
    }
    async getMovies(){
      const response = await fetch(BASE_URL + `movie/top_rated?api_key=${API_KEY}`);
      const data = await convertToJson(response);
      return data.results;
    }

    async getMoviesById(id){
      const response = await fetch(BASE_URL + `movie/${id}?api_key= ${API_KEY}`);
      const data = await convertToJson(response);
      return data;

    }
}

