const infiList = document.getElementById("infi-list");

// Define the number of items to add on each scroll
const itemsToAdd = 2;

// Variable to keep track of the current item number
let currentItemNumber = 10;

// Function to add new list items
function addListItems() {
  for (let i = 0; i < itemsToAdd; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = "Item " + (++currentItemNumber);
    infiList.appendChild(listItem);
  }
}

// Function to check if the user has reached the end of the list
function isEndOfList() {
  const scrollTop = infiList.scrollTop;
  const scrollHeight = infiList.scrollHeight;
  const clientHeight = infiList.clientHeight;

  return scrollTop + clientHeight >= scrollHeight;
}

// Event listener for scroll event
infiList.addEventListener("scroll", function () {
  if (isEndOfList()) {
    addListItems();
  }
});

// Initially add list items
addListItems();






// Add initial list items
for (let i = 0; i < 10; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = "Item " + (i + 1);
  infiList.appendChild(listItem);
}