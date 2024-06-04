# frontend-final-project

Group: Sayyed Muhammad Jafari - Seyed Ali Faghih Mousavi / 220700016, 220700039

## Project Description
The shop project is a simple online shop that allows users to view products, add them to the cart, and purchase them. The project is implemented using HTML, CSS, and Vanilla JS. 

Index: On the index page we can see multiple items, each item has a name, price, and a view button, clicking on the view button will take us to the product page. (so does the image of the product). 

login: In the header, we can see a login button, we need to login before being able to access the cart, or leave reviews. Clicking on the login button will take us to the login modal. We can enter our username and password and click on the login button to login. After logging in, the login button will take us to the user modal which contains a logout button. Clicking on the logout button will log us out. the other button is "non-functional".

Product: On the product page we can see the product name, price, description, size, and an add to cart button. Clicking on the add to cart button will add the product to the cart. we can also choose quanity of the product we want to add to the cart. We need to choose a size to add the product to the cart.

Cart: On the cart page we can see the products that we have added to the cart. We can see the product name, price, size, quantity, and a remove button. Clicking on the remove button will remove the product from the cart. We can also see the total price of the products in the cart.

NOTE: The number next to the cart icon shows the different types of products in the cart. Duplicate products are not counted. i.e, if we have 2 products of the same type and size in the cart, the number will still be 1.

reviews: you need to be logged in to be able to review. you can leave a review by clicking on the review button on the product page. you can see the reviews on the product page. logging out will remove the reviews (since there is no database, everything is stored in the local storage, which is cleared after logout, there is probably a better way to implement this, perhaps later).