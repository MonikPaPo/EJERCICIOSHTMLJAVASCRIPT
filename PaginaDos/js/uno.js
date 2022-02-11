var res;

function suma(num1,num2) {
 res = parseFloat(num1) + parseFloat(num2);
 document.getElementById('Resultado').innerHTML = res;
}

function resta (num1,num2){
	 res = parseFloat(num1) - parseFloat(num2);
 document.getElementById('Resultado').innerHTML = res;
}

function multiplicar(num1,num2){
	 res = parseFloat(num1) * parseFloat(num2);
 document.getElementById('Resultado').innerHTML = res;
}

function dividir (num1,num2){
	 res = parseFloat(num1) / parseFloat(num2);
 document.getElementById('Resultado').innerHTML = res;
}