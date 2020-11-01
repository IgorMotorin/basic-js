module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  
  

let n = Math.pow(2, disksNumber) - 1;
let sec = Math.floor(3600/turnsSpeed * n);
let obj = {turns: n, seconds: sec};

return obj


};
