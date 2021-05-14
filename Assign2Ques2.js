//arrangement problem
var x;
var square,double;
function compose(_f1, _f2){
    return function f1(x){
    var f1= compose(square, double);
    f1(5);
    f1(10);
    return function f2(x){
    var f2= compose(double, square);
    f2(5);
    f2(10);
    
}
    }
}
document.write(compose(f1(10),f2(10)));
