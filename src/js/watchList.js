import { loadHeaderFooter, getElement} from "./utils";
import { MovieWatchList} from "./MovieWatchList.mjs";

// const dataSource = new ExternalServices()
const parentElement = getElement(".watchList")

const ListOfSavedMovies = new MovieWatchList(parentElement)



const main = async () => {
    await loadHeaderFooter();
    await ListOfSavedMovies.init()
}

main()

