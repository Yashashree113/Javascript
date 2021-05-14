var arr = [ 1, 2, 3, 4, 5, 6, 7];
function oddArrayIndex(arr){
    let odd = (arr.filter((num, i)=>i % 2 == 1));
    console.log(odd);
}
oddArrayIndex(arr);




/*var emptyIndex=[];
function oddArrayIndex( arr, emptyIndex ) {
    for (var i = 1; i < arr.length; i += 2) {
      oddIndex=emptyIndex.push(arr[i]);
        }
        return oddIndex;
    }
    console.log(oddArrayIndex(arr,emptyIndex));
    */