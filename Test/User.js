var b=JSON.parse(localStorage.getItem("admin"));
function validation(){

    var user=
    {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password1:document.getElementById("password").value,
        birthdate:document.getElementById("date").value
    };
    window.localStorage.setItem('user',JSON.stringify(user));
}