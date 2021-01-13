var John =
{
    Height : 5.8,
    Weight : 72,
};
var Mark =
{
    Height : 5.8,
    Weight : 172,
};

function CalculateBMI(Height , Weight)
{
     return BMI= Weight/((Height*0.3048)*(Height*0.3048));
}

console.log('BMI of John is:' + CalculateBMI(John.Height,John.Weight));
console.log('BMI of Mark is:' + CalculateBMI(Mark.Height,Mark.Weight));

function CompareBMI()
{
    if((CalculateBMI(John.Height,John.Weight))>(CalculateBMI(Mark.Height,Mark.Weight)))
    {
        console.log('John having high BMI');
    }
    else if((CalculateBMI(John.Height,John.Weight))<(CalculateBMI(Mark.Height,Mark.Weight)))
    {
        console.log('Mark having high BMI.');
    }
    else
    {   
        console.log('Both having same BMI');
    }
}
CompareBMI();