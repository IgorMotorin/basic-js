const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let floatDigits = parseFloat(sampleActivity);
  if (
    (typeof sampleActivity !== "string") || 
    (floatDigits < 1 ) ||
    (isNaN(floatDigits))
    
    ) {
    return false;
  }
  
  let out = Math.ceil(Math.log(MODERN_ACTIVITY/floatDigits) * HALF_LIFE_PERIOD / Math.LN2);
 
   if (out < 1){
     return false;
   }

  
  return out;

  
};
