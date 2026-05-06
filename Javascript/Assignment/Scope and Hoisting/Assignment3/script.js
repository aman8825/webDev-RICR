//"use strict";
var x = 39;
console.log(x);
//console.log(a);
function classA() {
  "use strict";
  console.log(a);
}
//classA();
function checkThis() {
  "use strict";
  console.log(this);
}

checkThis();
("use strict");
function classC(num, num) {
  console.log(num + num);
}
classC(4, 6);
