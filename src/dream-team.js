const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (Array.isArray(members) !== true) {
    return false;
  }
let arrFilter = members.filter(a => typeof a === "string");
let arrMap = arrFilter.map(function (str) {return str.replace(/\s/g, '')[0];})
let arrSort = Array.from(arrMap.sort().join("").toUpperCase());
arrSort = arrSort.sort().join("");

return arrSort;
  
};
