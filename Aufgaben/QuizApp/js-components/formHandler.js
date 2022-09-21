import { cardCreator } from "./cardCreator.js";



export function formHandler() {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();


        const formData = new FormData(event.target);
        const allData = Object.fromEntries(formData);

    
        cardCreator(allData);
    })
}


formHandler();