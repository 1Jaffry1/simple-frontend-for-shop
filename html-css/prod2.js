let products = [
    { index: 1, name: 'msh1', image: '/images/p1/p1-1.jpg', title: 'Product 1', description: 'Description of Product 1.' },
    { index: 2, name: 'msh2', image: '/images/p2/p2-1.jpg', title: 'Product 2', description: 'Description of Product 2.' },
    { index: 3, name: 'msh3', image: '/images/p3/p3-1.jpg', title: 'Product 3', description: 'Description of Product 3.' },
    { index: 4, name: 'msh4', image: '/images/p4/p4-1.jpg', title: 'Product 4', description: 'Description of Product 4.' },
    { index: 5, name: 'msh5', image: '/images/p5/p5-1.jpg', title: 'Product 5', description: 'Description of Product 5.' },
    { index: 6, name: 'msh6', image: '/images/p6/p6-1.jpg', title: 'Product 6', description: 'Description of Product 6.' },
    { index: 7, name: 'msh7', image: '/images/p7/p7-1.jpg', title: 'Product 7', description: 'Description of Product 7.' },
    { index: 8, name: 'msh8', image: '/images/p8/p8-1.jpg', title: 'Product 8', description: 'Description of Product 8.' },
    // Add more products as needed
];

for (let i = 0; i < products.length; i++) {
    products[i].price = products[i].index*10;
}

let params = new URLSearchParams(window.location.search);
let product = products.find(p => p.name === params.get('name'));

document.getElementById("discounted").innerHTML =  "$"+product.price + ".00";
document.getElementById("newPrice").innerHTML= "$"+ product.price*0.7 + ".99";

document.getElementById("mainImage").setAttribute("src", "/images/shoes-photo/p" + product.index + "/p" + product.index + "-1.jpg");

let i = 1;
document.querySelectorAll(".thumbnail").forEach((thumbnail) => {
    thumbnail.setAttribute("src", "/images/shoes-photo/p" + product.index + "/p" + product.index + "-" + i + ".jpg");
    i += 1;
});

function changeImage(element) {
    var mainImage = document.getElementById('mainImage');
    mainImage.src = element.src;
}


setInterval(() => {
    i = (i % 4) + 1;
    let mainImage = document.getElementById("mainImage");
    mainImage.style.opacity = 0; // Set initial opacity to 0
    setTimeout(() => {
        mainImage.setAttribute("src", "/images/shoes-photo/p" + product.index + "/p" + product.index + "-" + i + ".jpg");
        mainImage.style.opacity = 1; // Fade in by setting opacity to 1
    }, 0); // Wait for 500 milliseconds before changing the image and fading in
}, 3000);
