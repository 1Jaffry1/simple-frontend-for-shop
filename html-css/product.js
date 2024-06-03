let products = [
    { name: 'msh01', image: '/images/shoes/shoe1.jpg', title: 'Product 1', description: 'Description of Product 1.', price: '$10.00' },
    { name: 'msh02', image: '/images/shoes/shoe1.jpg', title: 'Product 2', description: 'Description of Product 2.', price: '$20.00' },
    // Add more products as needed
];

let params = new URLSearchParams(window.location.search);
let product = products.find(p => p.name === params.get('name'));

document.getElementById('title').textContent = product.title;
document.getElementById('image').src = product.image;
document.getElementById('product-name').textContent = product.title;
document.getElementById('description').textContent = product.description;
document.getElementById('price').textContent = product.price;