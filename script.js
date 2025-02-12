const pwd =document.querySelector("#password");
const email = document.querySelector("#email");
const username = document.getElementById("username");
const alerts = document.querySelector(".alerts");
const visibility = document.querySelector(".fa-eye");
function validatePassword(){
    if (!pwd.value.match(/^[a-zA-Z-0-9]$/)){
        alerts.innerHTML = `<p class='text-muted text-danger alert alert-dismissible alert-danger'>Invalid password format</p>`;
    }
    if(pwd.value.length < 8){
        alerts.innerHTML = `<p class='text-muted text-danger alert alert-dismissible alert-danger'>your password must contain atleast 8 characters</p>`;

    }
    else{
        alerts.innerHTML = `<p class='text-muted  alert alert-dismissible alert-success'>Valid password format</p>`;

    }
}
function validateName(){
    if(!username.value.match(/^[a-zA-Z]/)){
        alerts.innerHTML = `<p class='text-muted text-danger alert alert-dismissible alert-danger'>invalid username ❌</p>`;

    }
    else{
        alerts.innerHTML = `<p class='text-muted  alert alert-dismissible alert-success'>Valid username ✅</p>`;
        
    }
}
function Hide(){
    if(
    visibility.addEventListener("click", function(){
    })
){
    pwd.value.className = "d-none"; 

}
else {
    pwd.value.className = "d-block";
}
}
function validateEmail(){
if(!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
    alerts.innerHTML = `<p class='text-muted  alert alert-dismissible alert-danger'>invalid email format</p>`;

}
else{
    alerts.innerHTML = `<p class='text-muted  alert alert-dismissible alert-success'>valid email format</p>`;

}
}
