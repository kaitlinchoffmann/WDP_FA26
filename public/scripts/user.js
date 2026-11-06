let loginForm = document.getElementById("loginForm")
loginForm.addEventListener("submit", login)

function login(e) {
    e.preventDefault()

    let username = document.getElementById("username").value
    let password = document.getElementById("pswd").value
    
    const user = {
        username: username,
        password: password
    }
    console.log(user)
    
}


// function login(e) {
//     e.preventDefault()

//     let username = document.getElementById("username").value
//     let password = document.getElementById("pswd").value
    
//     if(validatePassword(password)) {
//       const user = {
//           username: username,
//           password: password
//       }
//       console.log(user)
//     } else {
//         let errorMessage = 'Password is not good!!'
//         let p = document.getElementById("error")
//         p.innerText = `Error: ${errorMessage}`
//     }
// }
// function validatePassword(password) {
//     // can use functions to validate our password. this would make more sense
//     // for your registration form.
//     return true; // obviously, you would update this to something that makes sense...
// }


// example of object literal

const pet = {
    type: "cat",
    age: 12,
    name: "Petey"
}

console.log(pet)

pet.name = "Peter"
pet.age = 13
console.log(pet)

let petAge = pet.age

// example using concatenation
console.log('Animal age is ' + petAge)
console.log(`Animal age is ${petAge}`)