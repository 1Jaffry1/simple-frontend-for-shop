let products = document.getElementsByClassName("product");
for (let i = 0; i < products.length; i++) {
    products[i].setAttribute('name', "msh" + (i+1));
    setProduct(products[i], i+1);
    products[i].innerHTML += '<div><br><button class="add-to-cart">Add to Cart</button></div> '
}
// setProduct(createProduct("msh10", "this is disc1", 12, "shoe4"));

function setProduct(product, index) {
    product.onclick = function () {
        window.location.href = document.location.parent + "/../product.html?name=" + product.getAttribute("name");
    }

    // product.getElementsByTagName("h2")[0].innerHTML = "Product " + product.getAttribute("name")[product.getAttribute("name").length-3, product.getAttribute("name").length-1];
    product.getElementsByTagName("p")[0].innerHTML = "Discription of Product " + product.getAttribute("name");
    product.getElementsByTagName("h2")[0].innerHTML = product.getAttribute("name");
    product.getElementsByTagName("img")[0].setAttribute("src", "/images/shoes-photo/p"+index+"/p"+index+"-1.jpg");
    product.getElementsByTagName("img")[0].setAttribute("alt","shoe"+index);
}

// function createProduct(name, discription ,price, img) {
//     document.getElementById("maingrid").innerHTML += `<div class="product" name="`+name+`">
//     <img src="/images/shoes/`+img+`.jpg" alt="`+img+`">
//     <span> $`+price+`</span>
// </div>`;

// return HTMLElement()
// }