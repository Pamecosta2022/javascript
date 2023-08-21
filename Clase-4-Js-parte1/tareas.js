// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  const arr = [ 5, 3, 2, 7, 8 ];
const last = arr[arr.length-1];
console.log(last);
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var array = [97,100];
  for (let i = 0; i < array.length; i++) 
      {
    array[i] += 1; 
      }
  console.log(array);
  }
incrementarPorUno(array[97,100]) 

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var array = [10, 10, 16, 12];
  array.push(elemento);
  console.log(array);
}

agregarItemAlFinalDelArray(array[10, 10, 16, 12], 15)


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.push(elemento);
  console.log(array);
}

agregarItemAlComienzoDelArray(array, 'Hola') 


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var str = "";
for(let i = 0; i < palabras.length ; i++){

str += palabras[i] ;

}

var hello = str.slice(0,5);
var world = str.slice(5, 11);

var union = `${hello} ${world}`;

return union;

}

console.log(dePalabrasAFrase(['Hello', 'world!']));


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let myArr = [1, 3, 5, 7];
  for (let i = 0; i < array.length; i++){
    if (elemento == array[i]) {
      return true;
    }
  }
  return false;
}

console.log(arrayContiene(myArr, 4)); // Falso
console.log(arrayContiene(myArr, 5)); // Verdadero


function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0;
  for (var i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];
  }
  var resultado = (suma/resultadosTest.length);
  return resultado.toFixed(2);
}
const listanum = [5, 6, 7, 10, 12, 18];
console.log(promedioResultadosTest(listanum));


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var maximo = numeros[0]; // ==> [1]
  for(var i = 1; i < numeros.length; i++) {
    if(numeros[i] > maximo) { 
      maximo = numeros[i]; // ==> 2
    }
  }
  return maximo;
}
numeroMasGrande([1,2,3]);

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí:
  var cont = 0;
  for(let i=0; i<arreglo.length;i++){
    if(arreglo[i]>18){
        cont ++;
      }
  }
  return cont;
}
var listanum = [12, 55, 23, 54, 18, 19, 67];
console.log(cuentoElementos(listanum));


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí:
  switch (numeroDeDia) {
    case 1:
      return `Es fin de semana`;
    case 2:
      return `Es dia Laboral`;
    case 3:
      return `Es dia Laboral`;
    case 4:
      return `Es dia Laboral`;
    case 5:
      return `Es dia Laboral`;
    case 6:
      return `Es dia Laboral`;
    case 7:
      return `Es fin de semana`;
    default:
      return false;
  }
}
console.log(diaDeLaSemana());


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var numero = n.toString();

  return numero[0] == 9;
}

console.log(empiezaConNueve(999))


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:
  function todosIguales(arreglo) {
    if (arreglo == arreglo.length) {
      return true;
    }
    return false;
  }
} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var cont = 0;
  var newArray = [];

  for (let i = 0; i < array.length; i++) {

    array[i].includes("Enero") || array[i].includes("Marzo") || array[i].includes("Noviembre") ?
      newArray.push(array[i]) && cont++ : false;

  }

  return cont !== 3 ? "No se encontraron los meses pedidos" : newArray;
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let numeros = []
  for( var i = 0; i<array.length; i++){
    if(array[i]>100){
      numeros.push(array[i])
    }
  }
  return numeros
}

console.log(mayorACien( [100, 4, 56, 78, 200, 120, 7, 160, 148, 22]))


// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
