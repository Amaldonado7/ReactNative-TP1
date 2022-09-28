[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7436120&assignment_repo_type=AssignmentRepo)
# Guía ejercicios básicos de JS

Las funciones ya se encuentran creadas en el archivo `functions.js`. Solamente deben modificar su código para que hagan lo pedido.

### Empezando con funciones

1. Modificar la función `saludar(nombre)` para que devuelva `"Hola {nombre}, todo bien?"`

``` Bash
saludar("pepe")
> "Hola pepe, todo bien?"
```

2. Modificar la función `esPar(numero)` para que devuelva como resultado booleano si un número es par o no

``` Bash
esPar(2)
> true
```

### Manejo de arrays

En esta sección tenés que resolver todo usando únicamente los métodos de array  `forEach`, `map`, `filter`, `every`, `find`, `sort` según sea necesario.

3. Modificar la función `algunoEsPar(arrayNumeros)` para que devuelva un booleano en función de si ALGÚN número en el array es par o no.

``` Bash
algunoEsPar([1,2,3])
> true
```

4. Modificar la función `todosSonPares(arrayNumeros)` para que devuelva un booleano en función de si TODOS los números en el array son pares o no.

``` Bash
todosSonPares([1,2,3])
> false
```

5. Modificar la función `aprobo(arrayNotas)` que dada una lista de notas devuelve si aprobo o no. Un alumno aprobó si todas sus notas son mayores o iguales a 4

``` Bash
aprobo([8,6,2,4])
> false
```

6. Define la función `quienesAprobaron(arrayDeArraysNotas)`, que dada una lista de notas (las notas al mismo tiempo son una lista de números... vamos un array de arrays) devuelve solamente información de los alumnos que aprobaron. Podés ayudarte usando como parte de la solución la función que hiciste en el ejercicio anterior ;) ;).

``` Bash
quienesAprobaron([[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]])
> [[7,9,4,5],[9,6,7,10]]
```

7. Define la función `hayAlgunNegativo(arrayNumeros)`, que dada una lista de números nos dice si hay algún negativo o no.

``` Bash
hayAlgunNegativo([2,-3,9])
> true
```

8. Modificar la función `cuantosCumplen(funcion, arrayDeCosas)` que dada una función condición y una lista, diga cuantos elementos del array cumplen esa condición.

``` Bash
// even es una función que retorna true si un número es par (deben crearla)

cuantosCumplen(even,[7,9,25,42])
> 1

// Retorna 1 porque solo 42 es par
```

9. Modificar la función `rechazar(funcion, arrayDeCosas)`, que dada una función condición y un array, devuelva un array con los elementos que no la cumplen

``` Bash
rechazar(even,[7,9,87,42])
> [7, 9, 87]
```

10. Modifica la función `contiene(elemento, arrayDeCosas)` que dado un elemento y una lista, nos diga si la lista contiene al elemento

``` Bash
contiene(8,[7,8,9])
> true
```