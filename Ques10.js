function largest(arr) {
	var large = arr[0];
	for(var i=1; i<arr.length; i++) {
		if(large < arr[i]) {
			large = arr[i];
		}
	}
	return large;
}

var input = [10, 30, 85, 43, 70];
var output = largest(input);
document.write(output)