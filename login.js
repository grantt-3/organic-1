const email = document.getElementById("email")
const password = document.getElementById("password")
const iname = document.getElementById("name")
const btn = document.getElementById("btn")
const uname = document.getElementById("usersname")
const input = document.getElementsByName("input")

function checkValidty() {
    let ok = true;
    if (!email.value || !password.value || !iname.value) {
        console.log("Fields must not be empty")
        document.getElementById("emailspan").innerHTML = "Email cannot be empty"
        document.getElementById("namespan").innerHTML = "Name cannot be empty"
        document.getElementById("passwordspan").innerHTML = "password cannot be empty"
        ok = false
    } if (email.value != "") {
        document.getElementById("emailspan").innerHTML = ""
        ok = false
    } if (password.value != "") {
        ok = false
        document.getElementById("passwordspan").innerHTML = ""
    } if (iname.value != "") {
        ok = false
        document.getElementById("namespan").innerHTML = ""
    }
    if (password.value.length < 8 && password.value.length > 0) {
        console.log("password must be greater than 8")
        document.getElementById("passwordspan").innerHTML = "Password must be greater than 8 characters"
        ok = false
    }
    if (email.value && password.value.length > 8 && iname.value) {
        window.location.href = "/page.html";
        uname.innerHTML = `${iname.value}`
    }

    const validPasskey = localStorage.setItem("password", password.value)
    const validUname = localStorage.setItem('username', iname.value)
    if(validUname == iname.value && validPasskey == password.value){
        window.location.href("/page.html")
    }else{
        window.location.href("/loginuser.html")
    }
}

btn.addEventListener('click', () => {
    checkValidty()
})
