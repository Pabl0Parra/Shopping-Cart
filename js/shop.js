// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;
// declare a variable to later display its value in cart badge
let cartCounter = document.getElementById("count_product");

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  for (let i = 0; i < products.length; i++) {
    // 2. Add found product to the cartList array
    if (id == products[i].id) {
      cartList.push(products[i]);
      console.log(cartList);
    }
  }
}

// Exercise 2
function cleanCart() {
  cartList.length = 0;
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  //  for loop to add all the products picked
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  return total;
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

  // for loop to iterate through the cartList array
  for (let i = 0; i < cartList.length; i++) {
    // if cart is empty, push item into new array & add new key-value pair to object
    if (cart.length === 0) {
      cart.push(cartList[i]);
      cart[i].quantity = 1;
      cart[i].subTotal = cart[i].price * cart[i].quantity;
    } else {
      let j = 0;
      let idExists = false;

      //while loop to add quantities
      while (j < cart.length && idExists === false) {
        //if the product is already in cart, add 1 to quantity of that product
        if (cart[j].id === cartList[i].id) {
          cart[j].quantity++;
          idExists = true;
        }
        j++;
      }
      //if cart is not empty but the product is not in cart, add product and its quantity
      if (!idExists) {
        // clone the cartList array so that we don´t add the quantity key to it
        cart.push({ ...cartList[i] });
        cart[cart.length - 1].quantity = 1; // cart.lenght - 1 to avoid off-by-one error
      }
    }
  }
  // return cart;
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  // if (generateCart().length > 0) {
  //   // loop to itirate through the cart array
  //   for (let i = 0; i < cart.length; i++) {
  //     //added the subTotal key to element
  //     cart[i]["subTotal"] = cart[i].price * cart[i].quantity;
  //     //discount conditions for item 1
  //     if (cart[i].id === 1 && cart[i].quantity >= 3) {
  //       cart[i]["subTotalWithDiscount"] = cart[i].quantity * 10;
  //       //discount conditions for item 3
  //     } else if (cart[i].id === 3 && cart[i].quantity >= 10) {
  //       cart[i]["subTotalWithDiscount"] =
  //         Math.round(((cart[i].subTotal * 2) / 3) * 100) / 100;
  //     }
  //   }
  // }
  // return cart;

  // LEVEL 2
  if (cart.length > 0) {
    // Array.map() method to iterate the array & apply the discounts if proceeds
    cart.map((product) => {
      product.subTotal = product.price * product.quantity;
      // check if quantity matches or excedes min quantity for discounts to be applied
      if (product.id === 1 || product.id === 3) {
        if (product.quantity >= product.offer.number) {
          product.subTotalWithDiscount = Math.ceil(
            product.subTotal * (1 - product.offer.percent / 100)
          );
        }
      }
    });
  }
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  let totalProductsUnits = 0;
  // 1. Loop for to the array products to get the item to add to cart
  for (let i = 0; i < products.length; i++) {
    // if the button id is the same than the product id we are working with at the moment
    if (id == products[i].id) {
      // 2. Add found product to the cart array or update its quantity in case it has been previously added .
      // If the product is already in cart(cart.includes), find it(cart.find), store it in productExists & increase quantity by 1 only if it´s already in cart.
      if (cart.includes(products[i])) {
        let productExists = cart.find((x) => x.id == products[i].id);
        productExists.quantity++;
      }
      // If the product is not in cart(!cart.includes), set quantity to 1 and add it to cart
      if (!cart.includes(products[i])) {
        products[i].quantity = 1;
        cart.push(products[i]);
      }
    }
  }
  applyPromotionsCart();

  //generate the number of units for the cart badge
  cart.forEach((e) => (totalProductsUnits += e.quantity));
  cartCounter.innerHTML = totalProductsUnits;

  return cart;
}

// Exercise 8
function removeFromCart(id) {
  //parseInt to convert the string to a number
  let cartCounterSubstract = parseInt(cartCounter.innerText);
  // 1. For loop of cart to get the desired item remove from cart
  for (let i = 0; i < cart.length; i++) {
    // if both id´s match...
    if (id == cart[i].id) {
      //declare a letiable with cart[i] value to make code more readable
      let productToBeRemoved = cart[i];
      // If there is only 1 in cart...
      if (productToBeRemoved.quantity == 1) {
        // Remove the product from cart array using array.splice() method
        cart.splice(productToBeRemoved, 1);
        //substract 1 from badge counter
        cartCounterSubstract--;
      }
      // If there are more than 1 in cart...
      if (productToBeRemoved.quantity > 1) {
        // Reduce quantity by 1
        productToBeRemoved.quantity = productToBeRemoved.quantity - 1;
        //substract 1 from badge counter
        cartCounterSubstract--;
        // if the products don´t match min quantity for discount --> remove key "subTotalWithDiscount"
        if (productToBeRemoved.id === 1 || productToBeRemoved.id === 3) {
          if (productToBeRemoved.quantity < productToBeRemoved.offer.number)
            delete productToBeRemoved.subTotalWithDiscount;
        }
      }
    }
  }
  // badge counter after removing items
  cartCounter.innerHTML = cartCounterSubstract;

  return cart;
}

// Exercise 9

function printCart() {
  const LIST = document.getElementById("cart-modal-list-Items");
  const TITTLE = document.getElementById("cart-modal-title");
  const TOTAL = document.getElementById("totalExpenses");
  let printProduct = "";

  if (cart.length !== 0) {
    TITTLE.innerHTML = "Current products in your cart:";
  }

  for (let productProperties of cart) {
    printProduct += `<li class="row align-items-baseline">
        <i class="bi bi-bag-check-fill col-1"></i>
        <h6 class="col-11"> ${productProperties.name}</h6>
        <p class="text-muted col-4">Quantity:</p>
        <div class="col-4">
        <span class="badge bg-dark rounded-pill">${
          productProperties.quantity
        }</span>
        </div>
        <p class="text-muted">Subtotal ${
          // ?? operator to choose which price to pick (discounted or not)
          productProperties.subTotalWithDiscount ?? productProperties.subTotal
        }€</p>
        </li>`;
  }
  LIST.innerHTML = printProduct;
  TOTAL.innerHTML = `Total: ${calculateTotal()}€`;
}
function open_modal() {
  printCart();
}
