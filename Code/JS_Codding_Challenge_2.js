var JohnTeam={
    score1:89,
    score2:120,
    score3:103
};
var MikeTeam={
    score1:116,
    score2:94,
    score3:23
};

var JohnAvgScore = (JohnTeam.score1+JohnTeam.score2+JohnTeam.score3)/3;
var MikeAvgScore = (MikeTeam.score1+MikeTeam.score2+MikeTeam.score3)/3;

if(MikeAvgScore>JohnAvgScore)
{
    console.log('JohnTeam have good average then MikeTeam');
}
else
{
    console.log('MikeTeam have good average then JohnTeam');
}

JohnTeam.score1=20;
MikeTeam.score1=230;
var JohnAvgScore1 = (JohnTeam.score1+JohnTeam.score2+JohnTeam.score3)/3;
var MikeAvgScore = (MikeTeam.score1+MikeTeam.score2+MikeTeam.score3)/3;

if(MikeAvgScore>JohnAvgScore)
{
    console.log('JohnTeam have good average then MikeTeam');
}
else
{
    console.log('MikeTeam have good average then JohnTeam');
}