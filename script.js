const productContainer = document.getElementById("products-container");

const productsList  = ["Black Tea", "Coffee", "Green Tea"];
productsList.push("Milk");
productsList.splice(0,1);


const blackTea = document.createElement("div");
const greenTea = document.createElement("div");

blackTea.innerHTML = productsList[0];
greenTea.innerHTML = productsList[1];


blackTea.classList.add("product");
greenTea.classList.add("product");

productContainer.appendChild(blackTea);
productContainer.appendChild(greenTea);
console.log('done');