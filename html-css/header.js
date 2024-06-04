var modal = document.getElementById("myModal");
var loginBtn = document.getElementById("loginBtn");
var cartBtn = document.getElementById("cartBtn");
var userNameInLocalStorage = localStorage.getItem("username");
var usermodal = document.getElementById("userModal");
let itemsInCart = 0;

document.getElementById("cartBtn").onmouseover = function () {
    document.getElementById("cartImage").setAttribute("src", "/images/icon.png/cart.gif");
}
document.getElementById("cartBtn").onmouseout = function () {
    document.getElementById("cartImage").setAttribute("src", "/images/icon.png/cbg.png");
}


function logout() {
    // localStorage.removeItem("username");
    localStorage.clear();
    cartBtn.hidden = true;
    location.reload();
}

if (userNameInLocalStorage) {
    loginBtn.innerText = userNameInLocalStorage;
    cartBtn.hidden = false;  // Show the cart button when user is logged in
    document.getElementById("usernameInModal").innerText = "Hello "+userNameInLocalStorage+"!";

} else {
    loginBtn.innerText = 'Login | Register';
    cartBtn.hidden = true;  // Hide the cart button when user is not logged in
}

loginBtn.onclick = function () {
    if (userNameInLocalStorage) {
        usermodal.style.display = "block";
    } else {
        modal.style.display = "block";
    }
}

function closer() {
    if (userNameInLocalStorage) {
        userModal.style.display = "none";
    } else {
        modal.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == modal || event.target == userModal) {
        modal.style.display = "none";
        userModal.style.display = "none";
    }
}

var form = document.getElementById('FormId')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    if (!form.username.value || !form.password.value) {
        return
    }
    window.localStorage.setItem('username', form.username.value);
    cartBtn.hidden = false;  // Show the cart button after login
    location.reload();
});

function topPadder(container, paddingVal, index) {
    let navigator = document.getElementById(container);

    for (let i of navigator.children) {
        let v = (i.innerText.length);
        let pad = paddingVal - (v / 2);
        i.children[0].style.width = paddingVal + "px";
    }
}

topPadder("navigator", window.innerWidth / 10, 1);

for (let i of document.getElementById("firstCat").children) {
    let v = i.children[0].firstChild.data.length;
    let pad = (30 - v) / 2;
    i.style.padding = "0px " + pad + "px 0px " + pad + "px";
}
