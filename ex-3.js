//Exercise #3
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here
const displaygetJohnProfile = (data) => {
  console.log(data);
};

const displaygetJohnOrders = (data) => {
  console.log(data);
};

getJohnProfile()
  .then((data) => {displaygetJohnProfile(data)
  return getJohnOrders()
  })
  .then((data) => {displaygetJohnOrders(data)
  })  
  

