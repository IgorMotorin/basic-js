const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
let num = 0;

for (let i = 0; i < matrix.length; i++) {
let arr = matrix[i].filter(item => item === "^^");
num = arr.length + num;

}

return  num;

  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
