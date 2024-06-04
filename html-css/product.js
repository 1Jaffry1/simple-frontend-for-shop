let products = [
    { index: 1, name: 'p1', image: '/images/shoes-photo/p1/p1-1.jpg', title: 'Product 1', description: 'Description of Product 1.' },
    { index: 2, name: 'p2', image: '/images/shoes-photo/p2/p2-1.jpg', title: 'Product 2', description: 'Description of Product 2.' },
    { index: 3, name: 'p3', image: '/images/shoes-photo/p3/p3-1.jpg', title: 'Product 3', description: 'Description of Product 3.' },
    { index: 4, name: 'p4', image: '/images/shoes-photo/p4/p4-1.jpg', title: 'Product 4', description: 'Description of Product 4.' },
    { index: 5, name: 'p5', image: '/images/shoes-photo/p5/p5-1.jpg', title: 'Product 5', description: 'Description of Product 5.' },
    { index: 6, name: 'p6', image: '/images/shoes-photo/p6/p6-1.jpg', title: 'Product 6', description: 'Description of Product 6.' },
    { index: 7, name: 'p7', image: '/images/shoes-photo/p7/p7-1.jpg', title: 'Product 7', description: 'Description of Product 7.' },
    { index: 8, name: 'p8', image: '/images/shoes-photo/p8/p8-1.jpg', title: 'Product 8', description: 'Description of Product 8.' },
    // Add more products as needed
];

for (let i = 0; i < products.length; i++) {
    products[i].price = products[i].index * 10;
    products[i].currentPrice = products[i].index * 7 + 0.99;

}

let params = new URLSearchParams(window.location.search);
let product = products.find(p => p.name === params.get('name'));

document.getElementById("discounted").innerHTML = "$" + product.price + ".00";
document.getElementById("newPrice").innerHTML = "$" + product.currentPrice;

document.getElementById("mainImage").setAttribute("src", "/images/shoes-photo/" + product.name + "/" + product.name + "-1.jpg");

let i = 1;
document.querySelectorAll(".thumbnail").forEach((thumbnail) => {
    thumbnail.setAttribute("src", "/images/shoes-photo/" + product.name + "/" + product.name + "-" + i + ".jpg");
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



let size = null;

document.querySelectorAll(".size-button").forEach((s) => { if (s.getAttribute("disabled")) { s.style.backgroundColor = "grey"; s.style.color = "black" }; s.setAttribute("onclick", "selectSize(this)") });

function selectSize(element) {
    document.querySelectorAll(".size-button").forEach((s) => { if (!s.getAttribute("disabled")) { s.style.backgroundColor = "white"; s.style.color = "black" } });
    element.style.backgroundColor = "green";
    element.style.color = "white";
    size = element.textContent;
}

var addCartBtn = document.getElementById("addCartBtn");
if (!localStorage.getItem("username")) {
    addCartBtn.innerHTML = "Please login to add to cart";
    addCartBtn.setAttribute("disabled", "true");
    addCartBtn.style.backgroundColor = "grey";
}
var quantity = document.getElementById("quantity").value;


addCartBtn.onclick = function () {
    var cartItems = localStorage.getItem("cart");
    var quantity = Number(document.getElementById("quantity").value);
    let found = false;

    if (size) {
        if (!cartItems) {
            cartItems = "";
        }

        let items = cartItems.split(";").map(item => item ? JSON.parse(item) : null);

        items = items.map((item) => {
            if (item && item.name == product.name && item.size == size) {
                found = true;
                return { ...item, quantity: Number(item.quantity) + quantity };
            }
            return item;
        });

        if (!found) {
            items.push({ name: product.name, size: size, quantity: quantity, price: product.currentPrice, image: product.image });
        }

        localStorage.setItem("cart", items.filter(item => item).map(item => JSON.stringify(item)).join(";") + ";");
        console.log(cartItems);
        alert("Added to cart");
    } else {
        alert("Please select a size");
    }
}


//review section
var rBtn = document.getElementById("reviewBtn");
if (!localStorage.getItem("username")) {
    rBtn.setAttribute("disabled", "true");
    rBtn.innerHTML = "Please login to add a review";
    rBtn.style.backgroundColor = "grey";
} else{
    rBtn.onclick = function () {
        document.getElementById("reviewForm").style.display = "block";
}
}


let reviews = localStorage.getItem("reviews");
if (!reviews) {
    reviews = "";
}

reviews = reviews.split(";");

reviews.forEach((review) => {
    if (review) {
        let reviewObj = JSON.parse(review);
        let person = reviewObj.person;
        let reviewText = reviewObj.review;
    }
    let reviewItem = document.createElement("div").innerHTML = "<h3>" + person + "</h3><p>" + reviewText + "</p>";
    reviewItem.className = "reviewItem";
});

var reviewForm = document.getElementById("reviewForm");
reviewForm.onsubmit = function (event) {
    event.preventDefault();
    let person = localStorage.getItem("username");
    let reviewText = reviewForm.reviewText.value;
    localStorage.setItem("reviews", reviews + JSON.stringify({ person: person, review: reviewText }) + ";");}