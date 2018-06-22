function calc(id) {
	for (var i = 1; i <= 9; i++){
		document.getElementById(i).style.backgroundColor = "var(--light-grey)";
	}
	var colorThis = id;
	document.getElementById(colorThis).style.backgroundColor = "var(--light-blue)";
	if(id == 8){
		document.getElementById("getal1").value = document.getElementById("getal2").value = "";
	}
	if(id == 9){
		var getal1 = document.getElementById("getal1").value;
		var getal2 = document.getElementById("getal2").value;
	}
}