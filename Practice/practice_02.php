<?php

/*
//die()  function........
echo 'My name is Dhairya Bhaveshkumar Patel';
die('<br>Page is ended');
echo 'My sister\'s name is Tisha Bhaveshbhai Patel';
*/

/*
//exit() function.......
echo 'My name is Dhairya Bhaveshkumar Patel';
exit('<br>Page is ended');
echo '<br>My sister\'s name is Tisha Bhaveshbhai Patel';
*/
/*
//preg_match() function.........

$string = 'My name is Dhairya Bhaveshkumar Patel.';
if(@preg_match('/!/' , $string))
{
    echo 'Match Found.';
}
else
{
    echo 'Match Not Found.';
}
*/

/*
//basic of functions......
function function1()
{
    echo 'Dhairya'; 
}
function function2($s)
{
    echo 'Bhaveshkumar Patel';
}
echo " My name is ";
function1();
$x='Bhv';
echo '<br>My father name is ';
function2($x);
*/

//string functions.....
$string='My name is Dhairya Bhaveshkumar Patel.';
$string_word_count=str_word_count($string);
echo '<br>'.$string_word_count;
$string_shuffled=str_shuffle($string);
echo '<br>'.$string_shuffled;
$half=substr($string_shuffled,0,strlen($string)/2);
echo '<br>'.$half;
$reverse=strrev($string);
echo $reverse;
$string_1='My name is Dhairya Bhaveshkumar Patel.';
$string_2='My sister\'s name is Tisha Bhaveshbhai Patel';
similar_text($string_1,$string_2,$result);
echo'<br>';
echo 'The percentage of similarity is '.$result;
$string='    My name is Dhairya Bhaveshkumar Patel.    ';echo '<br>';
$string_trim=trim($string);
echo $string_trim;
$string_trim=ltrim($string);
echo $string_trim;
$string_trim=rtrim($string);
echo $string_trim;
?>
