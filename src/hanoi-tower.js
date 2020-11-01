const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  
  /*let a = Array(disksNumber).fill().map((e, i) => i + 1).reverse();
  let b = Array();
  let c = Array();
  let n = 0;
  
 function hanoi (disksNumber, a, b, c) {
   /*console.log(disksNumber);
   console.log(a);
   console.log(b);
   console.log(c);*/
   
/*
   if (disksNumber >0) {
     hanoi (disksNumber - 1, a, c, b);
     c.push(a.pop());
     n = n + 1;
    //console.log(n);
     hanoi(disksNumber - 1, b, a, c);
   }
 };

hanoi(disksNumber, a, b, c);
let sec = Math.floor(3600/turnsSpeed * n);
let obj = {turns: n, seconds: sec};*/


//====================================================

let n = Math.pow(2, disksNumber) - 1;
let sec = Math.floor(3600/turnsSpeed * n);
let obj = {turns: n, seconds: sec};

return obj


  
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
