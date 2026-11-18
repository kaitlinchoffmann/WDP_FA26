/*Part 1: Retrieving Data: https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json
1. Create a basic HTML page and link it to a JavaScript file.
2. Use fetch() to send a GET request to the URL above.
3. Use .then() and response.json() to process the response.
4. Print the returned data to the console.
5. Include .catch() to handle any errors.
*/

fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))

/*
Part 2: Working with the Data. Once you have retrieved the data:
6. Print the name and price of the first product to the console.
7. Use .map() to create a new array containing only the product names. Print this array to the console.
*/
fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
.then(response => response.json())
.then(data => {
    let items = data.map(item => ({
        itemName: item.name,
        itemPrice: item.price
    }))
    console.log(items)
})
.catch(error => console.log(error))

// Part 3: Create a function and place code inside. Add event listener to form to trigger function.
// Display the names of all the products on your HTML page using JavaScript. 
let itemForm = document.getElementById("itemForm")
itemForm.addEventListener("submit", getItems)

function getItems(e) {
    e.preventDefault()

    fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
    .then(response => response.json())
    .then(data => {
        let items = data.map(item => ({
            itemName: item.name,
            itemPrice: item.price
        }))
        let ulSection = document.getElementById("itemList")
        ulSection.innerText = ""
        items.forEach(item => {
            let li = document.createElement("li")
            li.innerText = `${item.itemName} is $${item.itemPrice}`
            ulSection.appendChild(li)
            // Using innerHTML is NOT recommened due to HTML Injection vulnerability, but you may use it for your project.
            /* ulSection.innerHTML += `
                  <li>${item.itemName} is $${item.itemPrice}</li>
               `*/
        })
        document.getElementById("item").value = ""
    })
    .catch(error => console.log(error))
}

/* Part 4: Make the Search form functional. Chain filter with map to retrieve
    item names that contain what is written in search bar.
    Append error message to form instead of simply printing to console.
*/
function getItems(e) {
    e.preventDefault()

    fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
    .then(response => response.json())
    .then(data => {
        let itemSearch = document.getElementById("item").value
        let items = data.filter(item => item.name.includes(itemSearch))
          .map(item => ({
            itemName: item.name,
            itemPrice: item.price
        }))
        let ulSection = document.getElementById("itemList")
        ulSection.innerText = ""
        items.forEach(item => {
            let li = document.createElement("li")
            li.innerText = `${item.itemName} is $${item.itemPrice}`
            ulSection.appendChild(li)
        })
        document.getElementById("item").value = ""
    })
    .catch(error => {
        let errorSection = document.getElementById("error")
        errorSection.innerText = error
    })
}