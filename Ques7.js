var myNumber=prompt("Enter a number between 1 to 12");
var i,table;
for(i=0; i<=10;i++){
    table= myNumber*i;
    document.write(`${myNumber} * ${i} = ${table}`);
    document.write("<br>");
}

