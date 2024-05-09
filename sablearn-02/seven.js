function generateelem(){
    
}

let userdata=[
    {name:'ali',age:12},
    {name:'amir',age:22},
    {name:'abbas',age:32},

  ]
  let container = document.createElement("div");
  container.classList.add("container");

  function cartgenerate(name, age) {
    let cart = document.createElement("div");
    cart.classList.add("cart");

    let vertical = document.createElement("div");
    vertical.classList.add("vertical");

    let ageel = document.createElement("p");
    ageel.innerText = `age:${age}`;

    let nameel = document.createElement("p");
    nameel.innerText = `name:${name}`;

    cart.appendChild(vertical);
    vertical.appendChild(nameel);
    vertical.appendChild(ageel);
    container.appendChild(cart);

    return cart;
  }
  document.body.appendChild(container);

  userdata.forEach(data=>{
    console.log(data.name);
    cartgenerate(data.name,data.age);

  })