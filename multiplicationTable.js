
function multiplicationTable(num)
{
  if(typeof(num) != "int")
  {
    for(var i =1; i<=10; i++)
    {
      //num x iteration = product
      console.log(`${num} X ${i} = ${(parseInt(num)*i)}`);  
    }
  }
  else
  {
    console.log("Invalid input. Please enter integer number.")
  }
    
}

//test 1
multiplicationTable(3.66);
