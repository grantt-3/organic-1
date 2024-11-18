const iname = document.getElementById("username");
const password = document.getElementById("password")
const btn = document.getElementById("btn")

function checkValidty() {
    let ok = true;
    if (!password.value || !iname.value) {
        console.log("Fields must not be empty")
        document.getElementById("usernamE1").innerHTML = "Name cannot be empty"
        document.getElementById("passworD1").innerHTML = "password cannot be empty"
        ok = false
    } if (password.value != "") {
        ok = false
        document.getElementById("passworD1").innerHTML = ""
    } if (iname.value != "") {
        ok = false
        document.getElementById("usernamE1").innerHTML = ""
    }
    if (password.value.length < 8 && password.value.length > 0) {
        console.log("password must be greater than 8")
        document.getElementById("passworD1").innerHTML = "Password must be greater than 8 characters"
        ok = false
    }
    if (password.value.length > 8 && iname.value) {
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
