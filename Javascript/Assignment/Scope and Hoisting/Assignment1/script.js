let test="This is Global variable";
console.log(test);
function classA()
{
console.log("ClassA",test);
}
classA();
function classB()
{
    var test1="This is Local variable";
console.log("ClassB",test1);
}
classB();
//console.log(test1);
function classC(num)
{
    if(num>0)
    {
        let test2="This is Block variable";
        console.log("Classc",test2);
    }
}
classC(6);
function classD(num)
{
    if(num>0)
    {
        let test2="This is Block variable";
       
    }
    console.log("ClassD",test2);
}
//classD(5);
function classE(num)
{
    if(num>0)
    {
        const test2="This is Block variable";
        //console.log("ClassE",test2);
    }
   // console.log("ClassE",test2);
}
classE(6);
const test4 =" global variable ";
function classF()
{
    let test5="local variable";
 console.log("ClassF",test5);
    {
        let test6=" block variable";

 console.log("ClassF",test6);
    }

 console.log("ClassF",test4);
}
classF();