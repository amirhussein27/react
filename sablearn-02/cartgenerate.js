import generateelem from "./generateelem.js";
function cartgenerate(name, age) {
  let cart = generateelem(
    "div",
    { class: "cart" },
    generateelem("p", null, `name: ${name}`),
    generateelem("p", null, `age: ${age}`)
  );

  // let vertical = document.createElement("div");
  // vertical.classList.add("vertical");

  // let ageel = document.createElement("p");
  // ageel.innerText = `age:${age}`;

  // let nameel = document.createElement("p");
  // nameel.innerText = `name:${name}`;

  // cart.appendChild(vertical);
  // vertical.appendChild(nameel);
  // vertical.appendChild(ageel);
  // container.appendChild(cart);

  return cart;
}
let userdata = [
  { name: "ali", age: 12 },
  { name: "amir", age: 22 },
  { name: "abbas", age: 32 },
  { name: "abbas2", age: 322 },
];

let container = generateelem("div", { class: "container" });

console.log(container);

userdata.forEach((data) => {
  container.appendChild(cartgenerate(data.name, data.age));
});

export default container;
