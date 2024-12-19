import { loadHeaderFooter, getElement} from "./utils";
import { MovieWatchList} from "./MovieWatchList.mjs";
import { SuperScript } from "./SuperScript.mjs";

// const dataSource = new ExternalServices()
const parentElement = getElement(".watchList")

const ListOfSavedMovies = new MovieWatchList(parentElement)

const superscript = new SuperScript();


const main = async () => {
    await loadHeaderFooter();
    await ListOfSavedMovies.init()

    superscript.init();
}

main()

