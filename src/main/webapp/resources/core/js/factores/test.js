function calculate3(fila){
	
	var res = 0;	
	res = parseInt(document.getElementById(fila+"_valoracion").value);
	document.getElementById(fila+"_calculado").innerHTML = res;
	document.getElementById(fila+"_calculado_hidden").value = res;
	
	refresh3();
}
function refresh3(){
	
	var total = 0;
	 total = parseInt(document.getElementById("experiencia_valoracion").value) + 
		parseInt(document.getElementById("capacidades_valoracion").value) + 
		parseInt(document.getElementById("calidad_valoracion").value); 
	
	document.getElementById("total").innerHTML = total;
	document.getElementById("total_hidden").value = total;
	
	total = new Big(1+((0.1/40)*parseInt(total)));
	
	
	
	document.getElementById("ecf").innerHTML = total.round(2,1);
	document.getElementById("ecf_hidden").innerHTML = total.round(2,1);
	
}