var Johnheight=6.2;
var Johnweight=60;

var Markheight=5.8;
var Markweight=62;

JohnBMI=Johnweight/(Johnheight*Johnheight);
MarkBMI=Markweight/(Markheight*Markheight);

Johnweight=Johnheight*0.3048;
Markheight=Markheight*0.3048;

var isMarkHasHigh = MarkBMI > JohnBMI;

if(isMarkHasHigh)
{
    console.log(`Is BMI of Mark is higher than John? ${isMarkHasHigh}`);
}
else{
    console.log(`Is BMI of John is higher than Mark? ${isMarkHasHigh}`);
}