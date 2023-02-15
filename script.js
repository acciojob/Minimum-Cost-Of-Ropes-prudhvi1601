//your code here
var input = document.querySelector("input").value;
var result = document.getElementById("result");

function minCost(a) {
	a.preventDefault();
	var arr = input.split(",");
	arr.sort(function (a,b) {
		return a-b;
	});
	var cost = 0;
	while(arr.length>1){
		var result = Number(arr[0]) + Number(arr[1]);
		arr.splice(0,2);
		arr.push(result);
		cost += result;
		arr.sort(function (a,b){
			return a-b;
		});
	}
	result.textContent = cost;
}
event.addEventListener("submit",minCost)





