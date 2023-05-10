// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return (w * h)
}

const perimeter = (w, h) => {
  return (2 * (w + h))
}

const circleArea = r => {
  return (3.14 * (r * r))
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
  return shoppingCart;
}

const addItemToCart = (item) => {
  // should add item to shopping cart
  const obj = shoppingCart
    .map((pos) => {
      return pos.name;
    })
    .indexOf(item.name);
  if (obj === -1) {
    shoppingCart.push(item);
  } else {
    shoppingCart[obj].quantity += 1;
  }
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  sumOfItems = 0;
  shoppingCart.forEach((item) => {
    sumOfItems += item.quantity;
  });
  return sumOfItems;
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  const cart = shoppingCart
    .map((obj) => {
      return obj.name;
    })
    .indexOf(item.name);
  if (cart === -1) {
    shoppingCart.push(item);
  } else {
    if (shoppingCart[cart].quantity === 1) {
      shoppingCart.splice(cart, 1);
    } else {
      shoppingCart[cart].quantity -= 1;
    }
  }
};

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
