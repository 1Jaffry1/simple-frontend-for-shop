let products = document.getElementsByClassName("product");
for (let i = 0; i < products.length; i++) {
    products[i].setAttribute('name', "p" + (i+1));
    setProduct(products[i], i+1);
    products[i].innerHTML += '<div><br><button class="add-to-cart">View</button></div>'
    products[i].getElementsByTagName("span")[0].innerHTML = "$" + (i+1)*10*0.7 + ".99";
}
// setProduct(createProduct("msh10", "this is disc1", 12, "shoe4"));

function setProduct(product, index) {
    product.onclick = function () {
        window.location.href = document.location.parent + "/../product.html?name=" + product.getAttribute("name");
    }

    product.getElementsByTagName("p")[0].innerHTML = "Discription of Product " + product.getAttribute("name");
    product.getElementsByTagName("h2")[0].innerHTML = product.getAttribute("name");
    product.getElementsByTagName("img")[0].setAttribute("src", "/images/shoes-photo/p"+index+"/p"+index+"-1.jpg");
    product.getElementsByTagName("img")[0].setAttribute("alt","shoe"+index);
}

