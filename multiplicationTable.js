
function multiplicationTable(num)
{
    for(var i =1; i<=10; i++)
    {
      //num x iteration = product
      console.log(`${num} X ${i} = ${(parseInt(num)*i)}`);  
    }
}

//test 1
multiplicationTable(2);

//test 2 
multiplicationTable(3);

//test 3
multiplicationTable(5);

//test 4
multiplicationTable(7);

//test 10
multiplicationTable(10);