var num= 2342,output = [];
var snum= num.toString();
var len = snum.length;

for (var i = 0; i < len; i += 1) {
    output.push(snum.charAt(i));
}
console.log(output);