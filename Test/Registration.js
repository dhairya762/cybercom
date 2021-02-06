
var admin={
	name:document.form.name.value,
	email:document.form.email.value,
	pasword:document.form.pass.value,
	city:document.form.city.value,
	state:document.form.state.value
};
console.log(admin);
var pass1 = document.form.pass.value;
var pass2 = document.form.confirmpass.value;
if(pass1!==pass2)
{
    alert("Halti na thav");
}

localStorage.setItem('admin',JSON.stringify(admin));