import { getElement } from "./utils";

export class HamburgerMenu {
    constructor() {

    }

    init() {
        this.displayMobileNav();
    }

    displayMobileNav(){
        const hamButton = getElement("#menu");
        const navigation = getElement(".navigation");

        hamButton.addEventListener('click', () => {
	        navigation.classList.toggle('open');
	        hamButton.classList.toggle('open');
        });
    }
}

export function initializeHamburgerMenu() {
   const menu = new HamburgerMenu();
   menu.init();
}