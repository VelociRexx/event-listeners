document.getElementById("pizza-btn").addEventListener("click", order_pizza);

function order_pizza() {
  let size = document.getElementById("size-in").value;
  let topping1 = document.getElementById("top1-in").value;
  let topping2 = document.getElementById("top2-in").value;

  var output = `Your ${size} pizza with ${topping1} and ${topping2} will be ready in 15 minutes!`;

  document.getElementById("output").innerHTML = output;
}
/*
document.getElementById("greet-btn").addEventListener("click", greet);

function greet() {
  var user_name = prompt("What is your name?");
  var user_city = prompt("What city do you live in?");

  var greeting = `Hello ${user_name} from ${user_city}!`;

  console.log(greeting);
}
*/
