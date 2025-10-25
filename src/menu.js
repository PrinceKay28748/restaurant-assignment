export default function loadMenu() {
    // First, we target the content div
    const content = document.getElementById('content');
    content.innerHTML = '';

    // Create the menu container
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    // Create the heading
    const heading = document.createElement('h1');
    heading.textContent = 'Our Delicious Menu';

    // Create a container for menu items
    const itemsContainer = document.createElement('div');
    itemsContainer.classList.add('menu-items-container');

    // Define the menu items
    const menuItems = [
        { name: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.', price: '$12' },
        { name: 'Margherita Pizza', description: 'A traditional pizza topped with fresh tomatoes, mozzarella cheese, and basil.', price: '$10' },
        { name: 'Caesar Salad', description: 'Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.', price: '$8' },
        { name: 'Grilled Salmon', description: 'Fresh salmon fillet grilled to perfection, served with a side of vegetables.', price: '$15' },
        { name: 'Tiramisu', description: 'A popular Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.', price: '$6' },
    ];

    // Loop through the menu items and create a card for each
    menuItems.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('menu-item-card');

        const itemName = document.createElement('h2');
        itemName.textContent = item.name;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement('span');
        itemPrice.textContent = item.price;
        itemPrice.classList.add('menu-item-price');

        // Append the name, description, and price to the card
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemDescription);
        itemCard.appendChild(itemPrice);

        // Append the card to the container
        itemsContainer.appendChild(itemCard);
    });

    // Append the heading and items container to the menu div
    menuDiv.appendChild(heading);
    menuDiv.appendChild(itemsContainer);

    // Append the menu div to the content div
    content.appendChild(menuDiv);
}