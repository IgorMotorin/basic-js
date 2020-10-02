const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date === undefined) {return "Unable to determine the time of year!"};

  if (!(date instanceof Date) ||
    !(date instanceof Object) ||
    (isNaN(Date.parse(date))) ||
    (date == "string") ||
    (date == "function") ||
    (Object.prototype.toString.call(date) != '[object Date]')) {
    throw new Error("NA");
  };


  date = new Date (Date.parse(date));
  let month = date.getMonth() + 1;
  
if (11 < month || month < 3) {
    return ("winter");
} else if (2 < month && month < 6) {
    return ("spring");
} else if (5 < month && month < 9) {
  return ("summer");
} else if (8 < month && month < 12) {
  return("autumn");
}

  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
