function Rotate(arr , k, n) {
    for (i = 0; i < k; i++)
        RotatebyOne(arr, n);
}

function RotatebyOne(arr , n) {
    var i, temp;
    temp = arr[0];
    for (i = 0; i < n - 1; i++)
        arr[i] = arr[i + 1];
    arr[n - 1] = temp;
}
function array(arr , n) {
    for (i = 0; i < n; i++)
        console.log(arr[i]);
}
var arr = [ 1, 2, 3, 4, 5, 6 ];
        Rotate(arr, 2, 6);
        array(arr, 6);