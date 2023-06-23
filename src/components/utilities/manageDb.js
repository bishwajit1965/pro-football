// use local storage to manage cart data
const addToLocalStorage = (id) => {
  let playerCart = getShoppingCart();
  // add quantity
  const quantity = playerCart[id];
  if (!quantity) {
    playerCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    playerCart[id] = newQuantity;
  }
  localStorage.setItem("player-cart", JSON.stringify(playerCart));
};

const removeFromLocalStorage = (id) => {
  const playerCart = getShoppingCart();
  if (id in playerCart) {
    delete playerCart[id];
    localStorage.setItem("player-cart", JSON.stringify(playerCart));
  }
};

const getPlayerCart = () => {
  let shoppingCart = {};
  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("player-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const deletePlayerCart = () => {
  localStorage.removeItem("player-cart");
};

export {
  addToLocalStorage,
  removeFromLocalStorage,
  getPlayerCart,
  deletePlayerCart,
};
