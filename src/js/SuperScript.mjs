import { getLocalStorage, getElement } from "./utils.mjs";

export class SuperScript {
    constructor(){
        // this.element = element;
    }

    init(){
        this.getWatchListCount();
    }

    getWatchListCount(){
        const cartList = getLocalStorage("so-movie") || [];
        const numberOfItems = cartList.length;
        if (numberOfItems > 0){
            const span = document.createElement("span") ;
            span.setAttribute("class","super-script");
            span.textContent = numberOfItems;

            const element = getElement(".img-container");
            element.appendChild(span);
            
            }
        }
}