function validate(){

    var pass1=document.form.password1.value;
    var pass2=document.form.password2.value;
    
    if(pass1!=pass2){
        alert("please enter the correct password");
        return false;
    }
    
    var admin={
        name:document.form.name.value,
        email:document.form.email.value,
        password1:document.form.password1.value,
        password2:document.form.password2.value,
        city:document.form.city.value,
        state:document.form.state.value,
    }
localStorage.setItem('admin',JSON.stringify(admin));}