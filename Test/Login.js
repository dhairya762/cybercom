function validate()
{
    

var uname = document.getElementById("username").value;
var password  = document.getElementById("password").value;
var a=JSON.parse(localStorage.getItem("admin"));

if(a.name!=uname)
{
        alert("Invalid User");
        return true;
    }
    else if(a.password1!=password)
    {
        alert("Invalid User");
        return true;
    }
    else 
    {
        alert("Valid User");
    }
}