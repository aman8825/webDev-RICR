let choice = 3;
switch (choice) {
  case 1: {
    console.log("Tea");
    break;
  }
  case 2: {
    console.log("Coffee");
    break;
  }
  case 3: {
    console.log("Juice");
    break;
  }
  default: {
    console.log("Invalid");
  }
}
let dayNumber = 5;
switch (dayNumber) {
  case 1: {
    console.log("Monday");
    break;
  }
  case 2: {
    console.log("Tuesday");
    break;
  }
  case 3: {
    console.log("Wednesday");
    break;
  }
  case 4: {
    console.log("Thrusday");
    break;
  }
  case 5: {
    console.log("Friday");
    break;
  }
  case 6: {
    console.log("Saturday");
    break;
  }
  case 7: {
    console.log("Sunday");
    break;
  }
  default: {
    console.log("Invalid DayNumber");
  }
}
let string = "vanilla";
switch (string) {
  case "vanilla": {
    console.log("You choose vanilla");
    break;
  }
  case "Chocolate": {
    console.log("You choose Chocolate");
    break;
  }
  case "Strawberry": {
    console.log("You choose Strawberry");
    break;
  }
  default: {
    console.log("Invalid");
  }
}
let num = 4;
switch (num) {
  case 1: {
    console.log("Nummber is 1");
    break;
  }
  case 2: {
    console.log("Nummber is 2");
    break;
  }
  case 3: {
    console.log("Nummber is 3");
    break;
  }
  default: {
    console.log("No case matches default works");
  }
}
let n = 2;
switch (n) {
  case 1: {
    console.log("Nummber is 1");
    break;
  }
  case 2: {
    console.log("Nummber is 2");
   // break;
    //without break both case 2&3 run;
  }
  case 3: {
    console.log("Nummber is 3");
    break;
    //with break only case 3 run;
  }
  
  case 4: {
    console.log("Nummber is 4");
    break;
  }
  default: {
    console.log("No case matches ");
  }
}
let x = 1;
switch (x) {
  case 1: {
    console.log("Nummber is 1");
   // break;
  }
  case 2: {
    console.log("Nummber is 2");
    //break;
  }
  case 3: {
    console.log("Nummber is 3");
    //break;
  }
  default: {
    console.log("No case matches ");
  }
  //if break is not used all case run 
}