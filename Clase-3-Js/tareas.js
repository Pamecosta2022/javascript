// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x > y) {
    console.log(x);
  } else if (y > x) {
    console.log(y);
  } else{
    console.log(x || y);
  }

}
obtenerMayor(20, 89)


function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if (edad === 18 || edad > 18) {
    console.log("Allowed");
  } else if (edad < 18) {
    console.log("Not allowed");
  }

}

mayoriaDeEdad(15)


function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  
  if (status === 1) {
    console.log("Online");
  } else if (status === 2) {
    console.log("Away");
  } else {
    console.log("Offline");
  }

}


function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if (idioma === 'aleman') {
    console.log("Guten Tag!");
  } else {
  if (idioma === 'mandarin') 
    console.log("Ni Hao!");
  }
  if (idioma === 'ingles') {
    console.log("Hello!");
  }
  else {
    console.log("Hola!");
  }

}
saludo("")


function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Pista: Puedes usar el statement Switch.
  switch(color){
    case "blue":
      return "This is blue"
      break;
    case "red":
      return "This is red"
      break;
    case "greeen":
      return "This is green"
      break;
    case "orange":
      return "This is orange"
      break;
    default:
      return "Color not found"
  }
}

console.log(colors("blue"))


function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero === 10 || numero === 5){
    console.log(true);
  } else{ 
    console.log(false);
  }
}
esDiezOCinco(10)



function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (numero === (Math.floor(numero))) {
    console.log (true);
  } else {
    console.log(false);
  }
}
esEntero(0)

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log("fizzbuzz");
  } else{
  
  if (numero % 3 === 0) {
    console.log("fizz");
  } else{
  
  if (numero % 5 === 0) {
    console.log("buzz");
    }
  
  else {
    console.log(numero);
    }
  } 
}
}
fizzBuzz(9) // fizz
fizzBuzz(10) // buzz
fizzBuzz(15) // fizzbuzz
fizzBuzz(4) // numero (4)


function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  //Tu código:
  if (num1 < 0 || num1 < 0 || num3 < 0) 
  {
  console.log("Hay negativos");
  } 
else {
    
    if(num1 === 0 || num2 === 0 || num3 === 0) 
    {
    console.log("Error");
    }
  
      if (num1 > num2 && num1 > num3 && num1 > 0)
      {
      console.log ("Número 1 es mayor y positivo");
      } 
      
      else { 
      if(num3 > num1 && num3 > num2) 
      { 
            let aumento = num3 + 1; 
            console.log(aumento);
            } 
            else{
          console.log (false);
            }
    }
}
    
} 


operadoresLogicos(4,6,9)


function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí:
  if (valor === true) {
    console.log("Soy verdadero");
  } else {
    console.log("Soy falso");
  }

}
esVerdadero();


function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí:
  var num = numero.toString().length;
  if(num === 3) {
    console.log(true);
  } else {
    console.log(false);
  }

}
tieneTresDigitos(3)


// ---------- Puntos extra ----------

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Tu código:
  if (numero === 0 || numero === 1) {
    console.log(false);
  }
  for (let z = 2; z < numero; z++) {
    if (numero % z === 0) {
      console.log(false);
    }
  }
  console.log(true);
}
esPrimo(7)


function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  //Tu código:
  var i = 0;
  var numero = numero;
  do{
    i += 1;
    numero += 5;
  } while (i < 8);
  console.log(numero);

}

doWhile(9)


// No modificar nada debajo de esta línea, sino no correrán los test.
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tieneTresDigitos,
  doWhile
};