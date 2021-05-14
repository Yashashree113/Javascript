var fruits_arr = ['Apple','Mango','Grapes','Orange','Fig','Cherry'];

function checkValue(value,arr){
  var status = 'Not exist';

  for(var i=0; i<arr.length; i++){
    var name = arr[i];
    if(name == value){
      status = 'Exist';
      break;
    }
  }

  return status;
}
console.log('status : ' + checkValue('Mango', fruits_arr) );
//console.log("<br>")
console.log('status : ' + checkValue('Peach', fruits_arr) );