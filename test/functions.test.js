const assert = require('assert');

const functions = require("../functions");

describe('saludar("nombre")', () => {
	it('nombre:"pepe" -> "Hola pepe, todo bien?"', () => {
		assert.equal(functions.saludar("pepe"), "Hola pepe, todo bien?");
	});
});

describe('esPar("numero")', () => {
	it('numero:-2 -> true', () => {
		assert.equal(functions.esPar(-2), true);
	});
	it('numero:-1 -> false', () => {
		assert.equal(functions.esPar(-1), false);
	});
	it('numero:0 -> false', () => {
		assert.equal(functions.esPar(0), true);
	});
	it('numero:1 -> false', () => {
		assert.equal(functions.esPar(1), false);
	});
	it('numero:2 -> false', () => {
		assert.equal(functions.esPar(2), true);
	});
});

describe('algunoEsPar("arrayNumeros")', () => {
	it('arrayNumeros:[1,2,3] -> true', () => {
		assert.equal(functions.algunoEsPar([1,2,3]), true);
	});
	it('arrayNumeros:[1,3] -> false', () => {
		assert.equal(functions.algunoEsPar([1,3]), false);
	});
	it('arrayNumeros:[] -> false', () => {
		assert.equal(functions.algunoEsPar([]), false);
	});
	it('arrayNumeros:[0] -> true', () => {
		assert.equal(functions.algunoEsPar([0]), true);
	});
	it('arrayNumeros:[1] -> false', () => {
		assert.equal(functions.algunoEsPar([1]), false);
	});
});

describe('todosSonPares("arrayNumeros")', () => {
	it('arrayNumeros:[2,4,6] -> false', () => {
		assert.equal(functions.todosSonPares([2,4,6]), true);
	});
	it('arrayNumeros:[2,3,4] -> false', () => {
		assert.equal(functions.todosSonPares([2,3,4]), false);
	});
	it('arrayNumeros:[0] -> true', () => {
		assert.equal(functions.todosSonPares([0]), true);
	});
	it('arrayNumeros:[1] -> false', () => {
		assert.equal(functions.todosSonPares([1]), false);
	});
});

describe('aprobo("arrayNotas")', () => {
	it('arrayNotas:[8,6,2,4] -> false', () => {
		assert.equal(functions.aprobo([8,6,2,4]), false);
	});
	it('arrayNotas:[4,4,4] -> true', () => {
		assert.equal(functions.aprobo([4,4,4]), true);
	});
	it('arrayNotas:[3,3,3] -> false', () => {
		assert.equal(functions.aprobo([3,3,3]), false);
	});
});

describe('quienesAprobaron("arrayDeArraysNotas")', () => {
	it('arrayDeArraysNotas:[[1,1,1],[2,2,3]] -> []', () => {
		assert.deepEqual(functions.quienesAprobaron([[1,1,1],[2,2,3]]), []);
	});
	it('arrayDeArraysNotas:[[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]] -> [[7,9,4,5],[9,6,7,10]]', () => {
		assert.deepEqual(functions.quienesAprobaron([[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]]), [[7,9,4,5],[9,6,7,10]])
	});
});

describe('hayAlgunNegativo("arrayNumeros")', () => {
	it('arrayNumeros:[2,-3,9] -> true', () => {
		assert.equal(functions.hayAlgunNegativo([2,-3,9]), true);
	});
	it('arrayNumeros:[2,0] -> false', () => {
		assert.equal(functions.hayAlgunNegativo([2,0]), false);
	});
});

describe('cuantosCumplen("funcion","arrayDeCosas")', () => {
	it('funcion:esPar, arrayDeCosas:[2,3,4] -> 2', () => {
		assert.equal(functions.cuantosCumplen(x => x%2 == 0,[2,3,4]), 2);
	});
	it('funcion:esPar, arrayDeCosas:[1,3,5] -> 0', () => {
		assert.equal(functions.cuantosCumplen(x => x%2 == 0,[1,3,5]), 0);
	});
	it('funcion:esNombreLargo, arrayDeCosas:["pepe","christian","federico","agustin"] -> 2', () => {
		assert.equal(functions.cuantosCumplen(x => x.length >= 8,["pepe","christian","federico","agustin"]), 2);
	});
});

describe('rechazar("funcion","arrayDeCosas")', () => {
	it('funcion:esPar, arrayDeCosas:[2,3,4] -> [3]', () => {
		assert.deepEqual(functions.rechazar(x => x%2 == 0,[2,3,4]), [3]);
	});
	it('funcion:esPar, arrayDeCosas:[1,3,5] -> [1,3,5]', () => {
		assert.deepEqual(functions.rechazar(x => x%2 == 0,[1,3,5]), [1,3,5]);
	});
	it('funcion:esNombreLargo, arrayDeCosas:["pepe","christian","federico","agustin"] -> ["pepe","agustin"]', () => {
		assert.deepEqual(functions.rechazar(x => x.length >= 8,["pepe","christian","federico","agustin"]), ["pepe","agustin"]);
	});
});

describe('contiene("elemento","arrayDeCosas")', () => {
	it('elemento:2, arrayDeCosas:[2,3,4] -> true', () => {
		assert.equal(functions.contiene(2,[2,3,4]), true);
	});
	it('elemento:1, arrayDeCosas:[2,3,4] -> false', () => {
		assert.equal(functions.contiene(1,[2,3,4]), false);
	});
	it('elemento:"pepe", arrayDeCosas:["pepe","christian","federico","agustin"] -> true', () => {
		assert.equal(functions.contiene("pepe",["pepe","christian","federico","agustin"]), true);
	});
	it('elemento:"pepe", arrayDeCosas:["christian","federico","agustin"] -> false', () => {
		assert.equal(functions.contiene("pepe",["christian","federico","agustin"]), false);
	});
});