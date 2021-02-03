<input type="text" name="name" value="Your Name"><br>


<?php

//Hello this is my first session of php.
/*
My
name
is
Dhairya
Bhaveshkumar
Patel
.*/
echo '<input type="text" name="name" value="Father Name"><br>';
//variable declaration......
$name='Dhairya';
$age=18;

//concatination
echo $name.' having age of'.$age.'<br>';
echo "$name having age of $age<br>"; 

//if.....else....if  statement......
if($age < 18)
{
    echo '<u>You are not mature.</u>';
}
else if($age >= 18)
{
    
    echo '<strong>You are mature.</strong>';
}
$text='Hello World';
//comparision operator......
$num1=1;
$num2=2;
if($num1<$num2)
{
    echo "$num2 is bigger than $num1<br>";
}
else if($num1>$num2)
{
    echo "$num1 is bigger than $num2<br>";
}
else
{
    echo "$num1 and $num2 are equal.<br>";
}

//arithmatic operator.......
$num1 +=20;
$num2 *=200;
echo $num1.'<br>';
echo $num2.'<br>';

//logical operator........
if(($num1<$num2)||($num2<$num1))
{
    echo 'Hello';
}
else
{
    echo 'Hellllllllllo';
}
//Triple Equal......
$num1='1';
$num2=1;
if($num1==$num2)
{
    echo '<br>Both are equal.<br>';
}
$num1='1';
$num2=1;
if($num1===$num2)
{
    echo 'Both are having same datatype.<br>';
}
else
{
    echo 'Both are not having same data type.';
}

//while loops.......
echo '<br>';
$num1=1;
while($num1<=10)
{
    echo $num1.' Dhairya <br>';
    $num1++;
}

//do....while loop.....
echo '<br>';
$num1=10;
do
{
    echo $num1.'Patel <br>';
    $num1--;
}
while($num1>=0);

//for loop......
for($count=1;$count<=10;$count++)
{
    echo $count.'<br>';
}

//switch statement......
echo '<br>';
$num1=1;
switch($num1)
{
    case 1: echo 'One';
    break;

    case 2: echo 'Two';
    break;

    case 3: echo 'Three';
    break;

    default: echo 'None of this.';
}
echo '<br>';
?>
<br><input type="text" name="name" value="<?php echo $text; ?>">
