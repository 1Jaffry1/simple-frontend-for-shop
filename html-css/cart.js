if (!localStorage.getItem("username")) {
    alert("Please login to proceed.");
    location.href = "index.html";
}

var cartItems = localStorage.getItem("cart");
let totalCartPrice = 0; // Initialize total cart price

if (!cartItems) {
    let warning = document.createElement("div");
    warning.innerHTML = "<h1>Your cart is empty</h1>";
    document.getElementById("mainCart").appendChild(warning);
} else {
    cartItems.split(";").forEach((item, index) => {
        if (item === '') { return; }
        let newItem = JSON.parse(item);
        let cartItem = document.createElement("div");
        let totalPrice = newItem.price * newItem.quantity;
        totalCartPrice += totalPrice; // Add item price to total cart price
        cartItem.classList.add("cart-item");
        // cartItem.onclick = () => {window.location.href = `product.html?name=${newItem.name}`};
        cartItem.innerHTML = `
            <img src=${newItem.image}>
            <div class="details" >
            <h2>${newItem.name}</h2>
            <p>Size: ${newItem.size}</p> 
            <p>Quantity: <input type="number" value="${newItem.quantity}" min="1" id="quantity${index}">
            <button onclick="updateQuantity(${index})">Update Quantity</button></p>
            <button onclick="removeItem(${index})">Remove</button>
            <br>
            </div>
            <p style="position:relative;">Price: ${totalPrice}</p>
            `;
        document.getElementById("mainCart").appendChild(cartItem);
    });

    // Display total cart price
    let totalPriceDiv = document.createElement("div");
    totalPriceDiv.innerHTML = `<p>Total Price: ${totalCartPrice.toFixed(2)}</p>`;
    totalPriceDiv.className = "total-price";
    document.getElementById("mainCart").appendChild(totalPriceDiv);
}

// Function to remove an item from the cart
function removeItem(index) {
    let cartItems = localStorage.getItem("cart").split(";");
    cartItems.splice(index, 1);
    localStorage.setItem("cart", cartItems.join(";"));
    localStorage.setItem("itemsInCart", localStorage.getItem("itemsInCart") - 1);
    document.getElementById("cartCount").innerHTML = ("Cart ("+localStorage.getItem("itemsInCart")-1+")");
    location.reload(); // Reload the page to update the cart
}

// Function to update the quantity of an item in the cart
function updateQuantity(index) {
    let quantity = document.getElementById(`quantity${index}`).value;
    let cartItems = localStorage.getItem("cart").split(";");
    let item = JSON.parse(cartItems[index]);
    item.quantity = quantity;
    cartItems[index] = JSON.stringify(item);
    localStorage.setItem("cart", cartItems.join(";"));
    location.reload(); // Reload the page to update the cart
}