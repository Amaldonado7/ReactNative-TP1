function saludar(nombre){
	resultado = "Hola" + " " + nombre +", todo bien?";
	return resultado
}

function esPar(numero){
	if (numero%2===0) {
		resultado = true;
	} else {
		resultado = false;
	}
	return resultado
}

function algunoEsPar(arrayNumeros){
	const even = (element) => element %2===0;
	return arrayNumeros.some(even);
}

function todosSonPares(arrayNumeros){
	const even = (element) => element %2===0;
	return arrayNumeros.every(even);
}

function aprobo(arrayNotas){
	const pass = (element) => element >= 4;
	return arrayNotas.every(pass);
}

function quienesAprobaron(arrayDeArraysNotas){
	const pass = (element) => element >= 4;
	return arrayDeArraysNotas.filter(e=>e.every(pass));
}

function hayAlgunNegativo(arrayNumeros){
	const negative = (element) => element < 0;
	return arrayNumeros.some(negative);
}

function cuantosCumplen(funcion, arrayDeCosas){
	return arrayDeCosas.filter(funcion).length;

}

function rechazar(funcion, arrayDeCosas){
	return arrayDeCosas.filter(e => !funcion(e));
}

function contiene(elemento, arrayDeCosas){
	return arrayDeCosas.some( e => e === elemento);
}

module.exports = {
	saludar, esPar, algunoEsPar, todosSonPares, aprobo, quienesAprobaron, hayAlgunNegativo, cuantosCumplen, rechazar, contiene
}