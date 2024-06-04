let products = [
    {index: 1,  name: 'msh1', image: '/images/p1/p1-1.jpg', title: 'Product 1', description: 'Description of Product 1.', price: '$10.00' },
    {index: 2, name: 'msh2', image: '/images/p2/p2-1.jpg', title: 'Product 2', description: 'Description of Product 2.', price: '$20.00' },
    {index: 3, name: 'msh3', image: '/images/p3/p3-1.jpg', title: 'Product 3', description: 'Description of Product 3.', price: '$10.00' },
    {index: 4, name: 'msh4', image: '/images/p4/p4-1.jpg', title: 'Product 4', description: 'Description of Product 4.', price: '$20.00' },
    {index: 5, name: 'msh5', image: '/images/p5/p5-1.jpg', title: 'Product 5', description: 'Description of Product 5.', price: '$10.00' },
    {index: 6, name: 'msh6', image: '/images/p6/p6-1.jpg', title: 'Product 6', description: 'Description of Product 6.', price: '$20.00' },
    {index: 7, name: 'msh7', image: '/images/p7/p7-1.jpg', title: 'Product 7', description: 'Description of Product 7.', price: '$10.00' },
    {index: 8, name: 'msh8', image: '/images/p8/p8-1.jpg', title: 'Product 8', description: 'Description of Product 8.', price: '$20.00' },
    // Add more products as needed
];

let params = new URLSearchParams(window.location.search);
let product = products.find(p => p.name === params.get('name'));

// document.getElementById("header").display = "none";
// document.getElementById('title').textContent = product.title;
document.getElementById("product-image").getElementById("mainImage").setAttribute("src", "/images/shoes-photo/p"+product.index+"/p"+product.index+"-1.jpg")
// document.getElementById('image').src = product.image;
for (let i=1; i<5;i++){
    const tempImg = document.createElement("img");
    tempImg.setAttribute("src", "/images/shoes-photo/p"+product.index+"/p"+product.index+"-"+i+".jpg");
    tempImg.className =  "thumbnail";
    tempImg.onclick = changeImage(tempImg);
    document.getElementById('slider').insertAdjacentElement('beforeend', tempImg);
}
console.log(document.getElementById('slider'));
document.getElementById('product-name').textContent = product.title;
document.getElementById('description').textContent = product.description;
document.getElementById('price').textContent = product.price;


//for slideshow
// let slides = document.querySelectorAll('.slider img');
// let currentSlide = 0;

// // Initially show the first slide
// slides[currentSlide].classList.add('active');

// // Function to advance to the next slide
// function nextSlide() {
//     slides[currentSlide].classList.remove('active');
//     currentSlide = (currentSlide+1)%slides.length;
//     slides[currentSlide].classList.add('active');
// }

// // Change slide every 2 seconds
// setInterval(nextSlide, 2000);


function changeImage(element) {
    var mainImage = document.getElementById('mainImage');
    mainImage.src = element.src;
}

