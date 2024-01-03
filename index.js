// const cart = ["shoes", "pants", "shirts"];

// //callback hell
// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId, function (paymentInfo) {
//     showOrderSummary(paymentInfo, function (paymentInfo) {
//       updateWallet(paymentInfo);
//     });
//   });
// });

// //using promises

// const promise = createOrder(cart);
// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });
