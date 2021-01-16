var Number = prompt("Enter Number:");
console.log("Fobonaci Series is: ");
var t1=0,t2=1,Temp;
console.log(t1);
console.log(t2);

Temp=t1+t2;
console.log(Temp);
for(i=1;i<=Number;i++)
{
    
    t1=t2;
    t2=Temp;
    Temp=t1+t2;
    console.log(Temp);
}