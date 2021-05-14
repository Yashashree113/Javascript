var a = ['a', 'b', 'c'], b = [1, 2, 3]
var c = a.concat(b.filter((item) => a.indexOf(item) < 0))
console.log(c);