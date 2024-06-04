if (!localStorage.getItem("username")) {
    alert("Please login to proceed.");
    location.href = "index.html";
}
var cartItems = localStorage.getItem("cart");
if (!cartItems) {
    let warning = document.createElement("div").innerHTML = "<h1>Your cart is empty</h1>";
}
cartItems.split(";").forEach((item) => {
    if (item === '') { return; }
    let newItem = JSON.parse(item);
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
        <img src=${newItem.image}>
        <div class="details">
        <h2>${newItem.name}</h2>
        <p>Size: ${newItem.size}</p> 
        <p>Quantity: ${newItem.quantity}</p>
        </div>
        <br>
        <p>Price: ${newItem.price}</p>
        `;
    document.getElementById("mainCart").appendChild(cartItem);

}

);