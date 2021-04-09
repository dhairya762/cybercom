<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <h1><center>Login</center></h1>
    
    <center>
        <form name = "form" method ="post" target="_blank" onsubmit="return validate();" >
            <input type="text" name="email" id="email" placeholder="Email" ><br><br>
            <input type="password" name="password" id="password" placeholder="Password"><br><br>
            <input type="submit" value="Login"formaction="managecategory.php"><br>
            <h4>Or</h4><br>
            <a href="Registration.html"><input type="submit" value="Register"formaction="registration.php"></a>
            
        </form>
    
    </center>
    
 </body>
</html>
<?php



?>