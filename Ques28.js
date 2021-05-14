var nums=[1,2,3,4,5,6,7,8,9];
var total=100;
var possibilities=Math.pow(3,nums.length-1);
var op=[];
var operations={0:"",1:"-",2:"+"},i;
for(i=0;i<=operations;i++){
    var temp=i.toString(3);
    var p=("00000000"+temp).substr(-8,8)
    .split("").map(
        function(v){
            return parseInt(v)
        });
    var sol="1"+o[p[0]]+"2"+o[p[1]]+"3"+o[p[2]]+"4"+o[p[3]]+
    "5"+o[p[4]]+"6"+o[p[5]]+"7"+o[p[6]]+"8"+o[p[7]]+"9";
    if(eval(sol)===100){
        op.push(nums);
    }
}