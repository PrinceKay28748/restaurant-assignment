export default function loadHome() {

    // first we target the content div
    const content = document.getElementById('content');
    content.className = 'homepage'; // Add the homepage class
    content.innerHTML = '';

    // Then we create the home div with class inside the content div
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    // Now we create the heading inside the home div
    const heading = document.createElement('h1');
    heading.textContent = ' Welcome to Kays Kitchen ';

    // Now we create the paragraph inside the home div
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Experience the best culinary delights from around the world, right at your doorstep.';

    // Now we create the image inside the home div
    const image = document.createElement('img');
    image.src = 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';
    image.alt = 'Delicious Food';


    // Lets append all the created elements to their respective parents
    homeDiv.appendChild(heading);
    homeDiv.appendChild(paragraph);
    homeDiv.appendChild(image);
    content.appendChild(homeDiv);

}