<hr>
<form action="practice_04.php" method="GET">
    <textarea name="user" id="textarea" cols="30" rows="10"required></textarea><br><br>  
     Search For: <br>
     <input type="text" name="searchfor" id="searchfor"required><br><br>
     Replace For:<br>
     <input type="text" name="replacewith" id="replacewith"><br><br>
    <input type="Submit" value="Find and Replace" ><br><br>
    <hr>
</form>
<form action="practice_04.php" method='GET'>
    DATE: <br><input type="text" name="date" id="date"><br>
    DAY: <br><input type="text" name="day" id="day"><br>
    Month: <br><input type="text" name="month" id="month"><br>
    YEAR: <br><input type="text" name="year" id="year"><br>
    Password: <br><input type="password" name="password" id="password">
    <input type="submit" value="Submit">
</form>
<?php

    if(isset($_GET['day'])&&isset($_GET['date'])&&isset($_GET['year'])&&isset($_GET['month']))
    {
        $day=$_GET['day'];
        $date=$_GET['date'];
        $year=$_GET['year'];
        $month=$_GET['month'];
        $password=$_GET['password'];
        if(!empty($day)&&!empty($date)&&!empty($year)&&!empty($month)&&!empty($password))
        {
            echo 'Ok.<br>';
        }
        else
        {
            echo 'Not Ok.';
        }
    }
    echo "The date is $date $month $year and day is $day having $password";
?>
<?php
    /*$offset=0;
    $text=$_GET['user'];
    $search=$_GET['searchfor'];
    $replace=$_GET['replacewith'];
    $searchlength=strlen($search);
    if(isset($_GET['user']) && isset($_GET['searchfor']) && isset($_GET['replacewith']))
    {
        while($strpos=strpos($text,$search,$offset))
        {
            $offset=$strpos+$searchlength;
            echo $offset;
            echo $strppos;
        }
    }
    */

    /*
    $time=time();
    $actul_time=date('H i s D M Y ',$time);
    echo "The current time is $actul_time";
    */

    //Random function Generator....
    /*$rand=rand(25,30);
    $max=GETrandmax();
    echo $rand.'/'.$max;
    */

    //$_SERVER .....
    /*$script_name=$_SERVER['SCRIPT_NAME'];
    echo $script_name;
    */

    //header function...
   /*
    echo '<stromg>This is my password</strong>';
    $redirect_page='practice_01.php';
    $redirect_page_new='practice_02.php';
    $redirect=true;
    if($redirect==true)
    {
        header('Location:'.$redirect_page);
    }
    else
    {
        header('Location:'.$redirect_page_new);
    }
    ob_end_clean();    
    */
    /*
    $http_client_ip=$_SERVER['HTTP_CLIENT_IP'];
    $http_x_forwarded_for=$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote_addr=$_SERVER['REMOTE_ADDR'];
    if (!empty($http_client_ip)) 
    {
        $ip_address=$http_client_ip;     
    } else if(!empty($http_x_forwarded_for))
    {
        $ip_address=$http_x_forwarded_for;
    }
    else
    {
        $ip_address=$remote_addr;
    }
    echo $ip_address;
     */

    /*if(isset($_GET['user'])&& !empty($_GET['user']))
    {
        echo $_GET['user'];
    }
    else
    {
        echo 'Please enter the input properly.';
    }
    */

    /*
    $find=array('My','name','is','Shaswat');
    $replace = array('M*','n***','i*','S******');
    $user_new=$_GET['user'];
    $user_output=str_ireplace($find,$replace,$user_new); 
    echo $user_output;
    */
    
    

?>
