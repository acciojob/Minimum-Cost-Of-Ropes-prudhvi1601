//your code here
var input = document.querySelector("input");
var result = document.getElementById("result");

function minCost(event) {
	event.preventDefault();
	var arr = input.value.split(",");
	arr.sort(function (a,b) {
		return a-b;
	});


	var cost = 0;
	while(arr.length>1){
		arr.splice(0,2);
		arr.push(result);
		cost += input.value;
		arr.sort(function (a,b){
			return a-b;
		});
	}
	result.textContent = cost;
}
input.addEventListener("submit",minCost)





