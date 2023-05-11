function gradeCalculator(num)
{

    if (num >= 90 && num <=100) 
    {
        console.log("A");
    }
    else if(num >= 80 && num <=89)
    {
        console.log("B");
    }
    else if(num >= 70 && num <=79)
    {
        console.log("C");
    }
    else if(num >= 60 && num <=69)
    {
        console.log("D");
    }
    else if(num >= 0 && num <=59)
    {
        console.log("F");
    }
    else{
        console.log("Please enter number between 1 to 100");
    }

}


gradeCalculator(85);