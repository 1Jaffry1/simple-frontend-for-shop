let products = document.getElementsByClassName("product");
for (let i = 0; i < products.length; i++) {
    products[i].setAttribute('name', "msh" + (i+1));
    setProduct(products[i]);
}

function setProduct(product, index, price) {
    product.onclick = function () {
        window.location.href = document.location.parent + "/../product.html?name=" + product.getAttribute("name");
    }

    // product.getElementsByTagName("h2")[0].innerHTML = "Product " + product.getAttribute("name")[product.getAttribute("name").length-3, product.getAttribute("name").length-1];
    product.getElementsByTagName("p")[0].innerHTML = "Discription of Product " + product.getAttribute("name");
    product.getElementsByTagName("h2")[0].innerHTML = product.getAttribute("name");
}
