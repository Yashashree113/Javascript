//Selection sort
function selectionSort(arr) {
    let index,aux, len = arr.length;
    for (let i = 0; i < len; i++) {
        index = i;
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[index]) {
            index = j;
        }
      }
      aux = arr[i];
      arr[i] = arr[index];
      arr[index] = aux;
    }
    return arr;
  }
let arr1=[1,2,3,4];
console.log("selectionSort:"+selectionSort(arr1));
//Insertion sort
const insertionSort = (arr = []) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      let element = arr[i];
      let j;
      for (j = i - 1; j >= 0 && arr[j] > element; j--)
        arr[j + 1] = arr[j];
      arr[j + 1] = element;
    }
    return arr;
  }
let arr2=[1,2,3,4];
console.log("insertionSort:"+insertionSort(arr2)); 
//merge Sort
function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
    const half = array.length / 2
    if(array.length < 2){
      return array 
    } 
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }
let arr3=[1,4,2,3,6,5,7];
console.log("mergeSort:"+mergeSort(arr3)); 
//Quick sort
const quickSort = (arry = []) => {
    if (arry.length === 0)
        return [];
    let left = [], right =[], array_element= arry[0];
    for (let i=1; i< arry.length; i++) {
        if(arry[i] < pivot)
            left.push(arry[i]);
        else
            right.push(arry[i]);
    };

    return [...quickSort(left), array_element, ...quickSort(right)];
}
let arr4=[5,7,9,6,8];
console.log("mergeSort:"+mergeSort(arr4));