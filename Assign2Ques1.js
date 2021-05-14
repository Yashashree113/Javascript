var x;
var _square,double;
function composedValue(_square, double, x ){
    function sqaure(x){
        return(x*x);
    }
    function double(x){
        return(x*2);
    }
    return(sqaure(double(x)));
}

document.write(composedValue(_square,double,5));