export default function loadContacts(){
    // first we target the content div
    const content = document.getElementById('content');
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');
    content.innerHTML = '';

    const heading = document.createElement('h1');
    heading.textContent = ' Contact Us ';

    const contactInfo = document.createElement('p');
    contactInfo.textContent = `
    Phone: (123) 456-7890
    Email: 2333@gmail.com
    Address: 123 Foodie Lane, Flavor Town, FT 45678

    `;

    contactDiv.appendChild(heading);
    contactDiv.appendChild(contactInfo);
    content.appendChild(contactDiv);
}