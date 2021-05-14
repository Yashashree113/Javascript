var myNumber= prompt("Enter a number");
var i;
var sum=0;
for(i=0; i<=myNumber; i++){
    if(i%3==0 || i%5==0){
        sum+=i;
    }
}
document.write("The sum of 1 to"+myNumber+" for only multiple of 3 or 5 is: "+sum);