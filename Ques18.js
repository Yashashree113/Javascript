
var on_all = function(num) {
    
    for(let i=1; i <= num; i++){
        let d = i * i;
        if(d ===num ){
            return true;
        }
    }
}
console.log(on_all(20));
