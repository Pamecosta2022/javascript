// En los próximos ejercicios, deberás completar las funciones con tu resolución.
// Todo tu código irá dentro de las llaves de la función.
// Recuerda que una función siempre devuelve un valor. (return)

// Nota: No modificar los nombres de las funciones y no utilizar console.log
// Caso contrario, no correrán los test!

// En estas primeras consignas, reemplaza `null` por la respuesta correcta

// Crea una variable "string", puede contener lo que quieras:
// Tip: borrar el dato 'null' antes de poner el dato tipo string.
const nuevaString = "pamela";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 33;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// ----------------------------------

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return (str);
}

function suma(x,y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var res= number(a) + number(b);
  return 'el resultado de la suma es'+ res;
}
console.log (suma (2,3));

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var res= number(a) - number(b);
  return 'el resultado de la resta es'+ res;
}
console.log (resta (5,3));


function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var res= number(a) * number(b);
  return 'el resultado de la multiplicacion es'+ res;
}
console.log (multiplica (2,3));



function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var res= number(a) / number(b);
  return 'el resultado de la division es'+ res;
}
console.log (divide (2,3));



function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x === y) {
    console.log(true);
  } else {
    console.log(false);
  }

}
sonIguales(2, 2);



function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90) {
    console.log(true);
} else {
console.log(false);

}
}
menosQueNoventa(15)
menosQueNoventa(90)
menosQueNoventa(100)


function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num>50){
    return true;
    } else {
    return false
    }
    }


function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var obtenerResto = x % y;
return obtenerResto;
}


function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( num % 2 == 0)
return true;
} else {
return false
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 !== 0) {
    console.log(true);
  } else {
    console.log(false);
  }

}




function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  let cuadrado = Math.pow(num, 2);
  console.log(cuadrado)
}
elevarAlCuadrado(5)
elevarAlCuadrado(10)


function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  let cubo = Math.pow(num, 3);
  console.log(cubo);
}

elevarAlCubo(4)


function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  let exponentx = Math.pow(num, exponent);
  console.log(exponentx)

}
elevar(82,2)


function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  let redondeo = Math.round(num);
  console.log(redondeo)
}
redondearNumero(1.5)
redondearNumero(2)
redondearNumero(0.1)


function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  let rendondup = Math.ceil(num);
  console.log(rendondup)
}
redondearHaciaArriba(9.6)


function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  let numalazar = Math.random (0) * 1
  console.log(numalazar)
}
numeroRandom()


function esPositivo(numero) {
  // La función va a recibir un entero. 
  // Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  // Si el número es positivo, devolver ---> "Es positivo"
  // Si el número es negativo, devolver ---> "Es negativo"
  // Si el número es 0, devuelve false
  // Tu código:
  if(numero === 0) {
    return false;
  }
  else if(numero > 0) {
    return "Es positivo";
  }
  else {
    return "Es negativo";
  }
}


function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  let symbol = '!';
  console.log(str + symbol);
}
agregarSimboloExclamacion("hello world")


function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Cristian" -> "Soy Cristian"
  // Tu código:
  let combinacion = (nombre + " " + apellido); 
  console.log(combinacion);
}
combinarNombres( "Soy", "Cristian")


function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Nahuel" -> "Hola Nahuel!"
  // Tu código:
  let saludo = "Hola" + " " + nombre + "!";
  console.log(saludo);
}

obtenerSaludo('Nahuel')


function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí:
  let resultado = euro * 1.2;
    console.log(resultado);
  }
  
deEuroAdolar(20);


// ---------- Puntos extra ----------

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  let area = alto * ancho;
  console.log(`El area del rectangulo es ${area}`);
}

obtenerAreaRectangulo(15,5)



function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  let perimetx = lado * 4;
  console.log(`El perimetro de un cuadrado es ${perimetx}`);

}
retornarPerimetro(4)



function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  let areatr = base * altura / 2;
  console.log(`El area del triangulo es ${areatr}`);
}
areaDelTriangulo(4,7)


function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí
  if (letra.length > 1) {
    return "Dato incorrecto";
  } else if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra ===  'u') {
    return "Es vocal";
  } else {
    return "Dato incorrecto";
  }
}

console.log(esVocal("a"));


// --------------------------------
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
