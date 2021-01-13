var JohnBill1 = 124;
var JohnBill2 = 48;
var JohnBill3 = 268;

var Tip = [];
var FinalBill = [];

function TipCalculator(JohnBill1)
{
    if(JohnBill1 < 50)
    {
        var Tip1=parseFloat((0.10)*JohnBill1);
        Tip.push(Tip1.toFixed(3));
        var FinalBill1=Tip1+JohnBill1;
        FinalBill.push(FinalBill1);
    }
    else if(JohnBill1 > 50 && JohnBill1 < 200)
    {
        var Tip1=parseFloat((0.10)*JohnBill1);
        Tip.push(Tip1.toFixed(3));
        var FinalBill1=Tip1+JohnBill1;
        FinalBill.push(FinalBill1); 
    }
    else
    {
        var Tip1=parseFloat((0.10)*JohnBill1);
        Tip.push(Tip1.toFixed(3));
        var FinalBill1=Tip1+JohnBill1;
        FinalBill.push(FInalBill1);
    }
}
function TipCalculator(JohnBill2)
{
if(JohnBill2 < 50)
    {
        var Tip2=parseFloat((0.15)*JohnBill2);
        Tip.push(Tip2.toFixed(3));
        var FinalBill2=Tip2+JohnBill2;
        FinalBill.push(FinalBill2); 
    }
    else if(JohnBill2 > 50 && JohnBill2 < 200)
    {
        var Tip2=parseFloat((0.15)*JohnBill2);
        Tip.push(Tip2.toFixed(3));
        var FinalBill2=Tip2+JohnBill2;
        FinalBill.push(FinalBill2); 
    }
    else
    {
        var Tip2=parseFloat((0.10)*JohnBill2);
        Tip.push(Tip2.toFixed(3));
        var FinalBill2=Tip2+JohnBill2;
        FinalBill.push(FinalBill2);
    }
}
function TipCalculator(JohnBill3)
{
    if(JohnBill3<50)
    {
        var Tip3=parseFloat((0.20)*JohnBill3);
        Tip.push(Tip3.toFixed(3));
        var FinalBill3=Tip3+JohnBill3;
        FinalBill.push(FinalBill3); 
    }
    else if(JohnBill3  > 50 && JohnBill3 < 200)
    {
        var Tip3=parseFloat((0.15)*JohnBill3);
        Tip.push(Tip3.toFixed(3));
        var FinalBill3=Tip3+JohnBill3;
        FinalBill.push(FinalBill3); 
    }
    else
    {
        var Tip3=parseFloat((0.10)*JohnBill3);
        Tip.push(Tip3.toFixed(3));
        var FinalBill3=Tip3+JohnBill3;
        FinalBill.push(FinalBill3);
    }
}
TipCalculator(JohnBill1);
TipCalculator(JohnBill2);
TipCalculator(JohnBill3);
alert('Tip:' + Tip + '\nFinalBill:' + FinalBill);