// This is the entry to the application.
import loadHome from './home';
import loadMenu from './menu';
import loadContacts from './contact';
import './style.css';


function initializeWebsite() {
    const homebtn = document.getElementById('home-button');
    const menubtn = document.getElementById('menu-button');
    const contactbtn = document.getElementById('about-button');

    // lets add your event listeners to load the pages when clicked

    homebtn.addEventListener('click', ()=>{
        loadHome();
    });

    menubtn.addEventListener('click', ()=>{
        loadMenu();
    });

    contactbtn.addEventListener('click', ()=>{
        loadContacts();
    });

    loadHome(); // Load home page by default on initial load

}

document.addEventListener('DOMContentLoaded', () => {
    initializeWebsite();
}
);