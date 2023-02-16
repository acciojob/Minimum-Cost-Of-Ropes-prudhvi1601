//your code here
var form = document.querySelector("form");
var result = document.getElementById("result");

function minCost(event) {
	event.preventDefault();
	var input = document.querySelector("input");
	var arr = input.value.split(",");
	arr.sort(function (a,b) {
		return a-b;
	});


	var cost = 0;
	while(arr.length>1){
		var res = Number(arr[0])+Number(arr[1]);
		arr.splice(0,2);
		arr.push(res);
		cost += res;
		arr.sort(function (a,b){
			return a-b;
		});
	}
	result.textContent = cost;
}
form.addEventListener("submit",minCost);





