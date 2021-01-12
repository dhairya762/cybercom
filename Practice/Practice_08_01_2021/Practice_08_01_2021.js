/*

//Printing a simple  statement....
console.log('My name is DHairya Bhaveshkumar Patel');

// Declaring variables......
var FirstName = 'Dhairya';
console.log(FirstName);

/* My
name
is 
Dhairya 
Bhaveshkumar 
Patel  
and 
I 
am 
from 
Government 
Engineering 
collage 
Rajkot.
*/
/*
var LastName = 'Patel';
var Age = 20;
console.log( 'My age is :'+ Age);
console.log(LastName);

var FullAge = true;
console.log(FullAge);

var Job;
console.log(Job);

Job = 'Software Developer';
console.log(Job);

//Type Convertion...
//Print multiple var in a single statement......
console.log(FirstName + ' ' + LastName);
console.log(`${FirstName} having age of ${Age}`);
console.log(`${FirstName} ${LastName} having age of ${Age}`);

//Declaring multiple var in one line....
var Job , Married;
Job = 'Software Developer';
Married = false;

console.log(`${FirstName} is a ${Age} year old ${Job}. Is he married?? ${Married}`);

//variable mutation...
Age ='Twenty Eight';
Job ='Senier Software Developer';
console.log(`${Age} having work of ${Job}`);

//Using prompt...
/*var Lastname = prompt('What is his last namee???');
console.log(LastName);
*/
/*

//Math Operator
var Year, MyAge , BornYear;
Year = 2021;
BornYear = 2000;
MyAge = Year - BornYear;
console.log(MyAge);

//Logical Operaters....
AgeDhairya=21;
AgeTisha=18;
var OlderDhairya = AgeDhairya > AgeTisha;
console.log(OlderDhairya);

//Types of Operaters....
console.log(typeof OlderDhairya);
console.log(typeof AgeDhairya);
*/

//If...Else Statements.....

/*
var FirstName = 'Dhairya';
var CivilStatus = 'Single';

if(CivilStatus=='Married')
{
    console.log(`${FirstName} is married`);
}
else
{
    console.log(`${FirstName} will marry soon.....`);
}

var Married = false;
if (Married) 
{   
    console.log(`${FirstName} is married`);
} else 
{
    console.log(`${FirstName} will marry soon.........`);    
}
*/


/*
var FirstNmae = 'Dhairya';
var Age = 20;

if(Age<13)
{
    console.log(`${FirstNmae} is a boy.`);
}
else if(Age >=20 && Age <= 30)
{
    console.log(`${FirstNmae} is a teenager.`);
}
else
{
    console.log(`${FirstNmae} is a man.`);
}
*/
//Ternary Operators...
/*
var FirstName = 'Dhairya';
var Age = 20;

Age>=18 ? console.log(`${FirstName} drinks beer`) : console.log(`${FirstName} drinks juice`);

var Drink = Age>=18 ? 'beer' : 'juice';
console.log(Drink);

if(Age>=18)
{
    var Drink = 'Beer';
}
else
{
    var Drink = 'Juice';
}
console.log(Drink);
*/

//Switch statements......
/*
var FirstName = 'Dhairya';
var Job = 'Teacher';
switch(Job)
{
    case 'Teacher':console.log(`${FirstName} teaches kid`);break;
    case 'Driver' :console.log(`${FirstName} drive cars`);break;
    case 'Designer' :console.log(`${FirstName} design good clothes.`);break;
    default : console.log(`${FirstName} do something else`);
}

switch(Job)
{
    case 'Teacher':console.log(`${FirstName} teaches kid`);
    case 'Driver' :console.log(`${FirstName} drive cars`);
    case 'Designer' :console.log(`${FirstName} design good clothes.`);
    default : console.log(`${FirstName} do something else`);
}
*/

//Truthy and Falsy Value and equality operators
/*
var Height=20;
if(Height)
{
    console.log('Variable is defined.');
}
else
{
    console.log('Variable is not been defined.');
}

var Age;
if(Age)
{
    console.log('Variable is defined.');
}
else
{
    console.log('Variable is not been defined.');
}
*/

//Function....
/*
function CalculateAge(BirthYear)
{
    return 2020-BirthYear;
}
var AgeDhairya = CalculateAge(2000);
console.log(AgeDhairya);
*/

//Function Statements and Expression....
/*
function Work(Job, FirstName)
 {
    switch (Job)
    {
        case 'Teacher':
            return `${FirstName} teaches to kid`;
        case 'Driver':
            return `${FirstName} drives cars`;
        case 'Designer':
            return `${FirstName} design dresses`;
        default:
            return `${FirstName} doing something else`;
    }
}

console.log(Work('Dancer' , 'Dhairya'));
*/

//Arrays......

var Name = ['Dhairya' , 'Tisha' , 'Vrushti' , 'Harshil' , 'Dhyani' , 'Kevin']
var Years = new Array(2000 , 2003 , 2012 , 2020 , 2005 , 2008 );
console.log(Name[2]);
console.log(Name.length);
console.log(Years[2]);
console.log(Years.length);
console.log(Name);
console.log(Years);
Name.push('Shaswat');
Years.push(2010);
console.log(Name);
console.log(Years);
Name.pop('Shaswat');
Years.pop(2010);
console.log(Name);
console.log(Years);
console.log (Years.indexOf(2003));