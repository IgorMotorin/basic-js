const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //console.log(arr);

  if (arr instanceof Array) {
  let arr_t;
  arr_t = arr.slice();
  let index_id = 0;

  //console.log("arr:", arr);
  arr.forEach((item, index) => {
    if (item === `--discard-next`) {
      arr_t.splice(index + 1 + index_id, 1);
      index_id = index_id - 1;
      
    }
    
    if (item === `--discard-prev` && index !== 0) {
      arr_t.splice(index - 1 + index_id, 1);
      index_id = index_id - 1;
      
    }
    if (item === `--double-next` && index !== (arr.length - 1)) {
      arr_t.splice(index + 1 + index_id, 0, arr_t[index  + 1 + index_id]);
      index_id = index_id + 1;
      //console.log("1:", arr_t)
      
    }
    if (item === `--double-prev` && index !== 0) {
      arr_t.splice(index - 1 + index_id, 0, arr_t[index - 1 + index_id]);
      index_id = index_id + 1;
    }
    //console.log("arr_t:", arr_t);
  });


  let arr_2t;
  arr_2t = arr_t.slice();
  let index_id2 = 0;

  //console.log("arr_t-1:", arr_t);
  arr_t.forEach((item, index) => {
    if (item === `--discard-next` ||
    item === `--discard-prev` ||
    item === `--double-next` ||
    item === `--double-prev`){
      arr_2t.splice(index + index_id2, 1);
      index_id2 = index_id2 - 1;
      
    }
    
    //console.log("после вырезки", arr_2t);
    
  });



  
  return arr_2t;
}; 

throw new Error("THROW");
  //console.log(arr); // исходный массив не меняется
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
