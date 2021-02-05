<?php
/*
//Introduction of Array.......
$food=array('Pasta','Pizza','Salad','Coldrinks');
echo $food[0].'<br>';
echo $food[1].'<br>';
echo $food[2].'<br>';
echo $food[3].'<br>';

$food[4]='Ice Cream';
echo $food[4].'<br>';

//Associative Array....
$food1=array('Pasta'=>300,'Pizza'=>1000,'Salad'=>150,'Coldrinks'=>50);
print_r($food1);

//Multi Dimensional Array....
$food=array(
    'Healthy'=>
            array('Salad','Vegetable'),
    'Unhealthy'=>
            array('Pizza','Ice Cream'));
echo '<br>'.$food['Healthy'][0].'<br>';
echo $food['Healthy'][1].'<br>';
echo $food['Unhealthy'][0].'<br>';
echo $food['Unhealthy'][1].'<br>';
*/
/*
//for each statement......
$food=array(
    'Healthy'=>
            array('Salad','Vegetable'),
    'Unhealthy'=>
            array('Pizza','Ice Cream'));

foreach($food as $element => $inner_item)
{
    echo '<strong>'.$element.'<br></strong>'; 
    foreach($inner_item as $item)
    {
        echo $item.'<br>';
    }
    echo '<br>';
}
*/

//include and required function...

include 'C:\xampp\htdocs\projects\cybercom\Practice\PHP\practice_01.php';
include 'practice_02.php';
echo 'My name is Dhairya Bhaveshkumar Patel';
?>