// 7. When a user submits the register form, a User object literal
// should be created and printed to the console. How can we do this?
let registerForm = document.getElementById("registerForm")
if(registerForm) registerForm.addEventListener("submit", register)

function register(e) {
    e.preventDefault()

    let userName = document.getElementById("username").value
    let password = document.getElementById("pswd").value
    
    const user = {
        userName: userName,
        password: password
    }

    console.log(user)
}

let loginForm = document.getElementById("loginForm")
if(loginForm) loginForm.addEventListener("submit", login)

// function login(e) {
//     e.preventDefault()

//     let username = document.getElementById("username").value
//     let password = document.getElementById("pswd").value
    
//     const user = {
//         username: username,
//         password: password
//     }
//     console.log(user)
    
// }


function login(e) {
    e.preventDefault()

    let username = document.getElementById("username").value
    let password = document.getElementById("pswd").value
    
    if(validatePassword(password)) {
      const user = {
          username: username,
          password: password
      }
      console.log(user)
    } else {
        let errorMessage = 'Password is incorrect!!'
        let p = document.getElementById("error")
        p.innerText = `Error: ${errorMessage}`

        // 
        // p.innerHTML = `
        // <h1 style="color: hotpink">${errorMessage}</h1>
        // `
    }
}
function validatePassword(password) {
    // can use functions to validate our password. this would make more sense
    // for your registration form.
    return false; // obviously, you would update this to something that makes sense...
}

