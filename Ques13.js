const array = [1,2,3,4,5,6,"taco"];

function reverse(array){
  return array.map((item,idx) => array[array.length-1-idx]);
}
console.log(reverse(array));