const prompt = require("prompt-sync")();

let items = [
  { id: 100, itemName: "Apple", cost: 50 },
  { id: 101, itemName: "Orange", cost: 100 },
  { id: 102, itemName: "Grapes", cost: 40 },
];

let users = [
  { userId: 1000, userName: "Nishant" },
  { userId: 1001, userName: "Anurag" },
  { userId: 1002, userName: "Ganesh" },
];

let orders = [
  {
    userId: 1000,
    products: [100, 102],
  },
  {
    userId: 1002,
    products: [101, 102],
  },
];
let inputId = prompt("Enter the userId: ");

function displayOrder(userid, products) {
  let productList = [];
  let totalprice = [];
  products.forEach((productid) =>{
    productList.push(items.filter((item) => item.id === productid)[0].itemName)
    totalprice.push(items.filter(item=>item.id===productid)[0].cost)
  }
  );
  console.log(`
username: ${users.filter((user) => user.userId === parseInt(userid))[0].userName}
userid:${userid}
products:[${productList}]
totalprice:${totalprice.reduce((a, b) => a + b, 0)}
    `);
}

function checkOrders(orderId, orders) {
  let order = orders.filter(order=>order.userId===parseInt(orderId))
  order.length>0?displayOrder(orderId,order[0].products):console.log("Not found")
}
checkOrders(inputId, orders);
// console.log(orders.filter(order=>order.userId===1000))
