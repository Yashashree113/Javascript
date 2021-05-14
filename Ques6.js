var myNumber=prompt("Enter a number");
var i, sum=0, product=1;
var choice=prompt("Enter 1 for sum or Enter 2 for product");
if(choice==1){
function sumofnumber(myNumber){
    for(i=0; i<=myNumber; i++){
        sum+=i;
    }
}
sumofnumber(myNumber);
document.write("The sum of 1 to "+ myNumber+ "is: "+sum);
}else
if(choice==2){
function productofnumber(myNumber){
    for(i=1; i<=myNumber; i++){
        product*=i;
    }
}
productofnumber(myNumber);
document.write("The product of 1 to "+ myNumber+ "is: "+product);
}else{
    document.write("Entered wrong choice");
}