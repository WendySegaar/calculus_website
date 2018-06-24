

function calc(id) {
	var operator;
	var uitkomst;
	var e_getal1 = document.getElementById("getal1");
	var e_getal2 = document.getElementById("getal2");
	var e_uitkomst = document.getElementById("uitkomst");
	for (var i = 1; i <= 9; i++){
		if(document.getElementById(i).style.backgroundColor == "var(--light-blue)"){
			operator = i;
		}

		document.getElementById(i).style.backgroundColor = "var(--light-grey)";
	}
	var colorThis = id;
	document.getElementById(id).style.backgroundColor = "var(--light-blue)";
	if(id == 6){
		e_getal2.setAttribute('type', 'hidden');
	}
	else {
		e_getal2.setAttribute('type', 'number');
	}
	if(id == 8){
		e_getal1.style.border = e_getal2.style.border = "none";
		e_getal2.setAttribute('type', 'number');
		e_getal1.value = e_getal2.value = e_uitkomst.value = "";
		getal1 = getal2 = uitkomst = "";
	}
	if(id == 9){
		var getal1 = parseInt(e_getal1.value);
		var getal2 = parseInt(e_getal2.value);

	
		
	
		if(operator == 6){
			
			if(!isNaN(getal1)){
				e_getal1.style.border = "none";
				uitkomst = Math.sqrt(getal1);
				e_uitkomst.value = uitkomst ;
				
			}
			else{
				e_getal1.style.border = "3px solid red";
			}

		}
		else{
			if(!isNaN(getal1) && !isNaN(getal2)){
				e_getal1.style.border = e_getal2.style.border = "none";
				if(operator == 1){
					uitkomst = getal1 - getal2;
				}
				else if(operator == 2){
					uitkomst = getal1 + getal2;
				}
				else if(operator == 3){
					uitkomst = getal1 * getal2;
				}
				else if(operator == 4){
					uitkomst = getal1 / getal2;
				}
				else if(operator == 5){
					uitkomst = Math.pow(getal1, getal2);
				}
				else if(operator == 7){
					getal1 = getal1 / 100;
					e_getal1.value = getal1;
					uitkomst = getal1 * getal2;
				}

				e_uitkomst.value = uitkomst ;
			}
			if(isNaN(getal1)){
				e_getal1.style.border = "3px solid red";
			}
			if(isNaN(getal2)){
				e_getal2.style.border = "3px solid red";
			}
		}
	}
}