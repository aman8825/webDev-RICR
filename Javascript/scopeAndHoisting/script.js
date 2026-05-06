// // let a=10;
// var a=10;
// console.log(a);
// console.log(b);

// // let b=10;
// var b=20;
// console.log(a);
// console.log(b);
let test="This is Global Test variable";
function classA()
{
console.log("ClassA",test);
}

function classC()
{
    let test2="This is local Test variable";// Local or Block variable
    console.log("ClassC",test);
    console.log("ClassC",test2);
}
function classD()
{
    console.log("ClassD",test);
    {// Block variable
        let v=20;
        console.log(v);
    }
    //console.log(v);
}
function classE()
{
    console.log("ClassE",test);
}
{
    let a=20;

function classF()
{
    

    console.log("ClassF",test);
    console.log(a);
}
function classG()
{
    console.log("ClassG",test);
    console.log(a);
}
}
function classB()
{
    console.log("ClassB",test);
    console.log(a);
}
classA();
classC();
classD();
classE();
classF();
classG();
classB();
