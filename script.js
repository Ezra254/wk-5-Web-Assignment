// 🚀 JavaScript Fundamentals Assignment

// -----------------------------
// 🎯 Part 1: Variables & Conditionals
// -----------------------------
function checkAge() {
  let age = document.getElementById("ageInput").value; // capture user input
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "✅ You are eligible!";
  } else {
    result.textContent = "❌ You are not eligible yet.";
  }
}

// -----------------------------
// ❤️ Part 2: Functions
// -----------------------------
// Function 1: Calculate total price
function calculateTotal(price, quantity) {
  let total = price * quantity;
  document.getElementById("totalResult").textContent = `Total: $${total}`;
}

// Function 2: Toggle content visibility
function toggleMessage() {
  let message = document.getElementById("toggleText");
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
}

// -----------------------------
// 🔁 Part 3: Loops
// -----------------------------
// Example 1: Countdown using for loop
function showCountdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // Clear before starting
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Example 2: Iterate through array
function listFruits() {
  let fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grape", "🍍 Pineapple"];
  let list = document.getElementById("fruitList");
  list.innerHTML = "";
  fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
}

// -----------------------------
// 🌐 Part 4: DOM Manipulation
// -----------------------------
document.getElementById("changeColorBtn").addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightyellow" ? "#f4f4f9" : "lightyellow";
});

document.getElementById("addItemBtn").addEventListener("click", () => {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = "New List Item " + (list.children.length + 1);
  list.appendChild(newItem);
});
