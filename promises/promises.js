// consuming promises

const cart = ["shirts", "pants", "belts"];

const promise = createOrder(cart);

promise.then(function (orderId) {
  proceedToPayment(orderId);
});

//////////////////////////////////////////////

//creating a promise
