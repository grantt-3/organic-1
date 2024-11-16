const email = document.getElementById("email")
const password = document.getElementById("password")
const name = document.getElementById("name")

const btn = document.getElementById("btn")

btn.addEventListener('click', () => {

    let ok = true;
    if (email.value == "" || password.value == "" || name.value == "") {
        console.log("email must not be empty")
        ok = false
    } else if (password.value.length < 8) {
        console.log("password must be greater than 8")
        ok = false
    } else if (ok == true) {
        window.location.href = "/page.html"
        console.log("8yydwtiwu")
    }
    console.log(email.value)
})