// para colocar comentarios mas rapido en un texto lo seleccionamos y le damos ctrl + }
// TIPOS DE DATOS

string = "cadena de texto";
number = 19;
Boolean = // true or // false

//formas de declarar la variable
// var, let, const 

// VAR ES DE UN ALCANCE GLOBAL 
// LET POR EL CONTRARIO TIENE UN ALCANCE MAS LIMITADO
// CONST NO PUEDEN CAMBIAR SU VALOR, CUANDO YA DECLARAMOS LO QUE ES NO SE PUEDE CAMBIAR


//CASOS ESPECIALES DE DATOS 
undefined //ESIE TIPO DE DATO NOS DICE QUE LA VARIABLE EXISTE EN EL PROGRAMA PERO NO TIENE VALOR
null //SI TIENE UN VALOR PERO VACIO, SE PONE DE MANERA INTENCIONAL CUANDO QUEREMOS QUE ALGO NO TENGA VALOR
NaN //NO ES UN NUMERO 


prompt // funciones de JS
// ejemplo del prompt 
prompt("dime tu nombre");

// prompt con variables 
let nombre = prompt("dime tu nombre");

alert(nombre)


// OPERADORES EN JAVASCRIPT
/* 
# OPERADORES DE ASIGNACION =  UN OPERADOR DE ASIGNACION ASIGNA UN VALOR AL OPERANDO DE LA IZQUIERDA BASADO
EN EL VALOR DEL OPERANDO DE LA DERECHA.
-----------------------------------------------------------------------------------------------------------
# OPERADORES ARITMETICOS = TOMAN VALORES NUMERICOS (YA SEAN LITERALES O VARIABLES) COMO SUS OPERANDOS Y 
RETORNAN UN VALOR NUMERICO UNICO.
 
*/

// ejemplo de operadores de asignacion  let number = 15;
let number = 15;
number += 15;

document.write(number); // para que se lea en el html (pagina)


// ejemplo de operadores aritmeticos 
// suma
number1 = 10;
number2 = 5;

number1++;
resultado = number1 + number2;

alert(resultado);

// exponensiacion
number1 = 10;
number2 = 5;

number1**number2;
resultado = number1**number2;

alert(resultado);


// concatenacion == unir strings 
saludo = "hola Catherine";
pregunta = " ¿how you doing?";

frase = saludo + pregunta;
document.write(frase);

// funcion con cat
// ${}
nombre = "Cathe";

frase = `soy ${nombre} y estoy loca `;  

document.write(frase);

// tener el backticks  `` nos ahorra un monton de problemas 

/* OPERADORES DE COMPARACION 
comparan dos expresiones y devuelven un valor BOOLEAN que representa la relacion de sus valores. */

// ejemplo 
let numero = 23;
let numero2 = 13;

document.write(numero == numero2);

/* OPERADORES LOGICOS 
nos devuelven un resultado a parti de que se cumpla o no una condicion, su resultado es 
BOOLEANO y sus operandos son valores logicos o asimilables a ellos. */

// ejemplo
/* 
AND LOGICO --->           &&
OR LOGICO ---->           ||
NOT LOGICO --->           !EXPRESION

*/

// Camel case   --->   myNameIsGabriela  
/* 
primera palabra con minuscula y la segunda empieza con mayuscula
*/

/* 

if 
else if 
else

*/ 

/*
arrays
- Definicion y Usos = en los arrays podemos almacenar varios tipos de datos, no como en la variable que 
solo se tiene que agregar uno.

arrays asociativos = array que tiene un valor asociado.

- formas de crear un array = 

*/

// arrays 
let frutas = ["banana ","manzana ","mango "];

document.write(frutas[1]);

//////////////////////////////////////// 

let pc1 = {
    nombre : "GabPC",
    procesador : "Intel core 13",
    ram : "16GB",
    espacio : "1TB"
}; // arrays con un conjunto de datos y mas facil encontrar los datos 

let pc2 = ["GabPC" , " Inte core 13" , "16GB" , "1TB"]; // array normal



document.write(pc1["nombre"]);

///////////////// las etiquetas <b></b> para colocar en negrita las letras


let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

frase = `el nombre de mi PC es: <b> ${nombre} </b> <br> 
         el procesador es: <b> ${procesador} </b> <br>
         el memoria ram es: <b> ${ram} </b> <br>
         el espacio: <b> ${espacio}</b><br> `; //MANERA RESUMIDA DE ESCRIBIR EL ARRAY 

         

document.write(frase);

/*
Bucles e iteracion 

- definicion y usos 
- sentencia while =  while siempre va a preguntar hasta que se cumpla lo que quieres saber
- sentencia do while 
- sentencia for 
- sentencia for in 
- sentencia for of 

*/

let numero = 0;

while (numero < 6) {
    numero++;
    document.write(numero + "<br>");
} /// ejemplo de while

/////////////
let numero = 0;

do {
   document.write(numero + "<br>");

    numero++;
} /// ejemplo de do  while

while (numero < 6) 

//
let numero = 0;

while(numero < 100) {
    numero++;
    document.write(numero);

    if (numero == 10){
        break;
    }
}

document.write(" FIN");      ///// SENTENCIA BREAK (LE INDICAMOS AL SISTEMA QUE PARE EL BUCLE CUANDO SE LO PIDAMOS


/////////
for (let i = 0;  i < 6; i ++) {
    document.write(i + "<br>");
} // forma de aumento 

// declaracion e inicialicion
// condicion 
// aumento o decremeto

for (let i = 6;  i >= 0; i --) {
    document.write(i + "<br>");
} // forma de decremento 
// declaracion e inicialicion
// condicion 
// aumento o decremeto 


// in and for 
let animales = ["gato ", " perro ", " rex"];

for (animal in animales) {
    document.write(animal + "<br>");
} // el in se enfoca en las posiciones 

document.write("<br>");

for (animal of animales) {
    document.write(animal + "<br>");
} // el of nos muestra el valor de cada posicion

// ejemplo del label 
array1 = ["cathe " , "naho " , "naza"];
array2 = ["carlos ", "pepe ", array1];


forRancio:     // label 
for (let array  in array2) {
    if (array == 2) {
        for (let array of array1){
            continue forRancio;
            document.write(array + "<br>");
        }
    } else {
        document.write(array2[array] + "<br>"); 
    }
}


/// funciones 
/* 
- definiciones y usos = 
- formas de crear funciones (y llamarlas)
- return
- parametros
- scope
- funciones flecha 
*/

// ejemplo de una funcion 
function saludar() {
    respuesta = prompt("hola, como estas?");
    if (respuesta == "bien") {
        alert("me alegra saber eso")
    } else {
        alert("que pena")
    }
}

saludar()  // llamar a la funcion que creamos cuantas veces queramos

// return 
function saludar() {
    alert("hola");
    return "te funciona" // para saber si funciona 
}

let saludo = saludar();
document.write(saludo);


/////// funcion con parametros 
function saludar(nombre) {
    let frase = `hola ${nombre}! ¿como estas?`;
    document.write(frase);
}
saludar("cathe")

// funcion de flecha (el que mas vamos a usar en el curso)
const saludar = nombre => {
    let frase = `hola ${nombre}! ¿como estas?`;
    document.write(frase)
}

saludar("gab")


/// ejemplo simplificado de funcion de flecha 
const saludar = (nombre)=> {
   
    document.write("hola como estas?" + nombre)
}

saludar("gab")

//// POO = PROGRAMACION ORIENTADA A OBJETOS

/*
DEFINICIONES Y USOS : 
- CONCEPTOS BASICOS DE POO
** CLASE: CREAN EL OBJETOS 
** ATRIBUTOS: CARACTERISTICAS Y PROPIEDADES QUE TIENEN LOS OBJETOS
** OBJETOS:  SON LOS RESULTADOS DE LAS CLASES
** METODO: SON LAS COSAS QUE PUEDE HACER EL OBJETO 
** CONSTRUCTOR: ES UNA FUNCION OBLIGATORIA
** INSTANCIACION: CUANDO ESTA LISTO TODO SE PUEDE DECIR QUE LA CLASE ESTA INSTANCIDA

*/

// EJEMPLOS
// this es igual al objeto que voy a crear
class animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie},  tengo ${this.edad} años y soy de color ${this.color}.`;

    }
    verInfo(){
        document.write(this.info + "<br>")
    } // METODO 

} // Creando el objeto 

const perro = new animal("perro" , 4 , "negro"); // Creando los atributos
const gato = new animal("gato" , 7 , "blanco");
const pajaro = new animal("pajaro" , 1 , "verde");


// document.write(perro.info + "<br>")
// document.write(gato.info + "<br>")
// document.write(pajaro.info + "<br>")

perro.verInfo();
gato.verInfo();
pajaro.verInfo();


/*
CARACTERISTICAS DE LA PROGRAMCION ORIENTADA A OBJETOS
** ABSTRACCION : 
** MODULARIDAD
** JERARQUIA


OTROS CONCEPTOS:
** HERENCIA  (EXTENDS)
** METODOS ESTATICOS (STATIC)
** METODOS ACCESORES (GETTERS: para obtener un valor ,  SETTERS: para modificar o definir un valor)
 */

class Animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie},  tengo ${this.edad} años y soy de color ${this.color}.`;

    }
    verInfo(){
        document.write(this.info + "<br>")
    } // METODO 
} // Creando el objeto


class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    ladrar(){
        alert(" WAWW ");
    }
} // HERENCIA



const perro = new Perro("perro" , 4 , "negro", "doberman"); // Creando los atributos
const gato = new Animal("gato" , 7 , "blanco");
const pajaro = new Animal("pajaro" , 1 , "verde");


perro.ladrar()nf
gato.ladrar()

/// stactic 

class Animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie},  tengo ${this.edad} años y soy de color ${this.color}.`;

    }
    verInfo(){
        document.write(this.info + "<br>")
    } // METODO 
} // Creando el objeto


class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    static ladrar(){
        alert(" WAWW ");
    } // statatic 
} // HERENCIA




const gato = new Animal("gato" , 7 , "blanco");
const pajaro = new Animal("pajaro" , 1 , "verde");


Perro.ladrar() // se coloca el nombre de la clase que es Perro y la funcion que en este caso es ladrar.
gato.ladrar()


// set and get 
class Animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie},  tengo ${this.edad} años y soy de color ${this.color}.`;

    }
    verInfo(){
        document.write(this.info + "<br>")
    } // METODO 
} // Creando el objeto


class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null ;
    }
    set setRaza(newName){
        this.raza = newName;

    } // SET 

    get getRaza(){
        return this.raza;
    } // GET
} // HERENCIA



const perro = new Perro("perro",5, "marron", "doberman");
const gato = new Animal("gato" , 7 , "blanco");
const pajaro = new Animal("pajaro" , 1 , "verde");


perro.setRaza = "gab";
document.write(perro.getRaza)


// CAPITULO CUATRO 
/*
METODOS DE CADENAS

- CONCAT() = JUNTA DOS O MAS CADENAS Y RETORNA UNA NUEVA
- STARTWITH() = SI UNA CADENA COMIENZA CON LOS CARACTERES DE OTRA CDENA, DEVUELVE TRUE, SINO DEVUELVE FALSE.
- ENDSWITH() = SI UNA CADENA TERMINA CON LOS CARACTARES DE OTRA CADENA, DEVUELVE TRUE, SINO DEVUELVE FALSE.
- INCLUDES() = SI UNA CADENA PUEDE ENCONTRARSE DENTRO DE OTRA CADENA, DEVUELVE TRUE SINO DEVUELVE FALSE.
- INDEXOF() = DEVUELVE EL INDICE DEL PRIMER CARACTER DE LA CADENA, SI NO EXISTE, DEVUELVE -1.
- LASTINDEXOF() = DEVUELVE EL ULTIMO INDICE DEL PRIMER CARACTER DE LA CADENA, SI NO EXISTE, DEVUELVE -1.

//TODAS LAS CADENA DE ARRIBA NOS SIRVEN PARA BUSCAR CADENAS Y DEVOLVERNOS UN VALOR.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

-PADSTART() [PROPUESTA DE ESTANDAR] - RELLENAR CADENA AL PRINCIPIO CON LOS CARACTERES  DESEADOS
-PADEND() [PROPUESTA DE ECMA] - RELLENAR CADENA AL FINAL CON LOS CARACTERES DESEADOS
-REPEAT() DEVUELVE LA MISMA CADENA REPETIDA LA CANTIDAD QUE DESEE 

// MODIFICAMOS LA CADENA Y RELLENAMOS

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


-SPLIT() DIVIDE LA CADENA COMO LE PIDAMOS 
-SUBSTRING() NOS RETORNA UN PEDAZO DE LA CADENA QUE SELECCIONAMOS
-toLOWERCase() CONVIERTE UNA CADENA A MINUSCULA
-toUPPERCase() CONVIERTE UNA CADENA A MAYUSCULA
-toString() Metodo que devuelve una cadena que representa al objeto especificado
-trim()- elimina los espacios en blanco al principio y al final de una cadena
-trimEnd()- elimina los espacios en blanco al final de una cadena
-trimStart()- elimina los espacios en blanco al principio de una cadena
-valueOf()- retorna el valor primitivo de un objeto string.

//LA USAMOS PARA CONVERTIR O TRANSFORMAR CADENAS

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/


// concat

let cadena = "cadena de prueba";
let cadena2 = " cadena 2";

resultado = cadena.concat(cadena2);

document.write(resultado);


// STARTWITH

let cadena = "cadena de prueba";
let cadena2 = "cadena";

resultado = cadena.startsWith(cadena2);

document.write(resultado);

// endWith

let cadena = "cadena de prueba";
let cadena2 = "prueba";

resultado = cadena.endsWith(cadena2);

document.write(resultado); // verifica que termine como le decimos 


// includes

let cadena = "cadena de prueba";
let cadena2 = "de";

resultado = cadena.includes(cadena2);

document.write(resultado); // encuentra lo que forma parte de la cadena 


// indexOf

let cadena = "cadena y prueba";
let cadena2 = "";

resultado = cadena.indexOf("y");

document.write(resultado); // Nos arroja el resultado de la posicion de la palabra que queremos encontrar en la cadena.
                           // Si nos aparece -1 como resultado es porque la palabra no se encuentra en la cadena.


// lastIndexOf

let cadena = "cadena de prueba";
let cadena2 = "";

resultado = cadena.lastIndexOf("de");

document.write(resultado); // Si hay dos palabras iguales en la cadena, este encuentra la posicion de la ultima palabra.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// padStart


let cadena = "abc";
let cadena2 = "";

resultado = cadena.padStart(6, "a");

document.write(resultado); // Rellenar la cadena con lo que quieras al comienzo 


// padEnd

let cadena = "abc";
let cadena2 = "";

resultado = cadena.padEnd(20, "12344");

document.write(resultado); // Rellena la cadena pero al final.


// rpeat

let cadena = "abc ";
let cadena2 = "";

resultado = cadena.repeat(2);

document.write(resultado); // Repite el string las veces que tu le indiques.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SPLIT

let cadena = "hola, como , estas ";
// let cadena2 = "";

resultado = cadena.split(",");

document.write(resultado);  // split divide en cada espacios



// SUBSTING

let cadena = "ABCDEFG";
// let cadena2 = "";

resultado = cadena.substring(0,3);

document.write(resultado);  // substring nos devuelve lo que seleccionamos


// toLOwerCase

let cadena = "ABCDEF";
// let cadena2 = "";

resultado = cadena.toLowerCase();

document.write(resultado);  // toLOwerCase todo a minuscula


// toString

let cadena = 50;
// let cadena2 = "";

let resultado = cadena.toString();

document.write(resultado * 2);  // toString convierte a stirng un dato


// Tring

let cadena = "  Pedro  ";
// let cadena2 = "";

let resultado = cadena.trim();

document.write(resultado.length);  // Tring  elimina nos espacios del principio y final
                            // length para saber la longitud de un string o array



// tringEnd

let cadena = "  Pedro  ";
// let cadena2 = "";

let resultado = cadena.trimEnd();

document.write(resultado.length);  // tringEnd  elimina los espacios del final 


// tringStart

let cadena = "  Pedro";
// let cadena2 = "";

let resultado = cadena.trimStart();

document.write(resultado.length);  // tringStart  elimina los espacios del principio

// valueOf

let cadena = "Pedro";
// let cadena2 = "";

let resultado = cadena.valueOf();

document.write(resultado.length);  // valueOf nos da el valor de la cadena


///////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
METODOS ARRAYS
/---TRANSFORMADORES---
- pop() - elimina el ultimo elemento de un array y lo devuelve.
- shift() - elimina el primero elemento de un array y lo devuelve.
- push() - agrega un elemento al array al final de la lista.
- reverse() - invierte el orden de los elementos de un array.
- unshift() - agrega uno o mas elementos al inicio del array, y devuelve la nueva longitud del array.
- sort() - ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.
- splice() - cambia el contenido de un array eliminando elementos existentes y arreglando nuevos elementos.


/---ACCESORES--
- join() - une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve.
- slice() - devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin(fin no incluido).
- Metodos ya vistos en cadena: toString(), indexOf(), lastIndex()

/---DE REPETICION--
- filter() - crea un nuevo array con todos los elementos que cumpla las condiciones
- forEach() - [ejecuta la funcion indicada una vez por cada elemento del array.]
*/

// pop()

let nombre = ["pedro", "maria", "jorge"];
// let cadena2 = "";

let resultado = nombre.pop();

 document.write(resultado); // pop()


 // shift()

let nombre = ["pedro", "maria", "jorge"];
// let cadena2 = "";

let resultado = nombre.shift();

 document.write(resultado); // shift()


 // push()

let nombre = ["pedro", "maria", "jorge"];
// let cadena2 = "";

document.write(nombre + "<br>");

let resultado = nombre.push("juancito");

// document.write(resultado); 

document.write(nombre);// push()


// reverse()

let nombre = ["pedro", "maria", "jorge"];
// let cadena2 = "";

document.write(nombre + "<br>");

let resultado = nombre.reverse();

// document.write(resultado); 

document.write(nombre);// reverse()


//unshift()

let nombre = ["pedro", "maria", "jorge"];
// let cadena2 = "";

document.write(nombre + "<br>");

let resultado = nombre.unshift("gabriela", "cathe");

// document.write(resultado); 

document.write(nombre);// unshift()


//sort()

let nombre = ["pedro", "maria", "jorge"];
// let cadena2 = "";

document.write(nombre + "<br>");

let resultado = nombre.sort();

// document.write(resultado); 

document.write(nombre);// sort() los ordena alfabaticamente 


//splice()

let nombre = ["pedro", "maria", "jorge"];
// let cadena2 = "";

document.write(nombre + "<br>");

let resultado = nombre.splice(0,2,"gabriela"); /*el primer elemento seria la posicion, el segundo, 
                                                  lo queremos eliminar, el tercero lo que le queremos
                                                  agg. */     
// document.write(resultado); 

document.write(nombre);// sort() los ordena alfabaticamente 
/////////////////////////////////////////////////////////////////////////////////////////////////

//METODOS ACCESORES

//join()

let nombre = ["pedro", "maria", "jorge"];
// let cadena2 = "";

document.write(nombre + "<br>");

let resultado = nombre.join("<br>elemento: ");      

document.write("elemento: " + resultado);// join() nos separa el texto.


//slice()

let nombre = ["pedro", "maria", "jorge"];
// let cadena2 = "";

document.write(nombre + "<br>");

let resultado = nombre.slice(0,2);      

document.write(resultado);// slice() nos muestra los elementos que queramos.

/////////////////////////////////////////////////////////////////////////////////////////////////

// DE REPETICION

//forEach()

let nombre = ["pedro", "maria", "jorge"];
// let cadena2 = "";

// document.write(nombre + "<br>");

let resultado = nombre.forEach(nombre => document.write(nombre + "<br>")); 


//filter()

let nombre = ["pedro", "maria", "jorge", "gabriela"];
// let cadena2 = "";

// document.write(nombre + "<br>");

let resultado = nombre.filter(nombre => nombre.length > 2);      

document.write(resultado)
/* 
forEach y filter son lo mismo solo que filter() --
filter  es mas completo porque nos permite agg la cualidad del length */


//////////////////////////////////////////////////////
/*
OBJETO MATH BASICOS  IMPORTANT (SOLO SE TRABAJA CON NUMEROS)

//METODOS
- sqrt() - devuelve a raiz cuadrada positiva de un numero.
- cbrt() - devuelve la raiz cubica de un numero.
- max() - devuelve el mayor de cero o mas numeros,
- min() - devuelve el mas pequeño de cero o mas numeros
- random() - devuelve un numero pseudo-aleatorio entre cero y uno
- round() - devuelve el valor de un numero redondeado al numero entero mas cercano
- fround() - devuelve la representacion flotante de presicion simple mas cercanda de un numero
- floor() - devuelve el mayor entero menor que o igua a un numero
- trunc() - devuelve la parte entera de un numero x, la eliminacion de los digitos fracconarios

// PROPIEDADES
- PI
- SQRT1_2
- SQRT2

- E
- LN2
- LN10
- LOG2E
- LOG10E

*/
//CAPITULO 5 LA CONSOLA
/* 
--------- FUNCIONES DE REGISTRO ---------------------------
- Asert() - aperece un mensaje de error en la consola si la afirmacion es falsa. si la funsion
es verdadera no aparecera nada (NO ESTANDAR).
- Clear() - Limpia la consola 
- Error() - Muestra un msj de error en la consola web.
- Info()- Emitee un mensaje informativo a la consola web. en FireFox y Chrome, se muestra un 
pequeño icono "i" junto a estos elementos de los registros de la consola web.
- Log()- Muestra un mensaje en la consola web (o del interprete JavaScript).
- Table() - Esta funsion toma un argumento obligatorio: Data, que debe ser un Array o un objeto 
y un parametro adicional: columns, y nos muestra una tabla en consola.
- Warn() - Imprime un mensaje de advertencia en la consola web 
- Dir() - Despliega una lista interactiva de las propiedades del objeto JavaScript especificado
(NO ESTANDAR).

-------- FUNCIONES DE CONTEO --------------------------
- Count() - Rgistra el numero de veces que se llama a count(). Esta funcion toma como argumento
opcional una etiqueta.

- CountReset()- Recetea el contador console.count(). 

------------- FUNCIONES DE AGRUPACION -------------------

- GROUP() - crea un nuevo grupo en linea en el registro de consola.
- groupEnd() - remueve un grupo en linea en el registro de la consola web.
- groupCollapsed() - crea un grupo en linea pero contraido, el usuario debe expandirlo para verlo


--------------FUNCIONES DE TEMPORIZADOR ----------------

-time() - inicia un temporizador
-timenEnd() - registra el valor actual de un temporiazo
-timeLog() - detiene un temporizado

*/

/*  
Dom 
-Definicion
-Concepto extendido

-Nodo - Un nodo en el Dom es cualquier etiqueta del cuerpo, como un parrafo, el mismo body o incluso las
etiquetas de una lista.
         *Document: El nodo document, es el nodo raiz, a partir del cual derivan el resto de nodos

         *Element: Nodos definidos por etiquetas HTML.

         *Text: El texto dentro de un nodo element se considera un nuevo nodo hijo de tipo de texto.

         *Attribute: Los atributos de las etiquetas definen nodo, (en Javascript no los veremos como nodos,
         sino como informacion asociada  al nodo del tipo element).

         *Comentarios y otros: los comentarios y otros elementos como las declaraciones doctype en cbezera
         de los documentos HTML generan nodos.



Document- Metodos de seleccion de elementos 
  -getElementById() - selecciona un elemento por el ID
  -getElementsByTagName() - selecciona todos los elementos que coincidan con el nombre de la etiqueta
  especificada.
  -querySelector() - devuelve el primer elemento que coincida con el grupo especificado de selectores
  -querySelectorAll() - devuelve todos los elementos que coincida con el grupo especificado de selectores.


Metodos para definir, obtener y eliminar valores de atributos.

   -setAttribute() - modifica el valor de un atributo
   -getAttribute()- obtiene el valor de un atributo
   -removeAttribut()- remueve el valor de un atributo.


/////////////////////// LAS CLASES SE SELECCIONAN CON PUNTOS Y LOS ID CON #. ///////////////////////////

 <input type="range" name=""> //.
 rangoEtario.setAttribute("type", "text") // Para cambiar el tipo de atributo que queramos.
*/


/*
ATRIBUTOS GLOBALES 

- class  lista de clases del elemento separadas por espacios.

- contenteeditabla - indica si el elemento puede ser modificado por el usuario (bool)

- dir - indica la direccionalidad del texto

- hidden - indica si el elemento aun no es, o ya no es, relevante.

- id - define un identificdor unico.

- style -contiene declaraciones de estilo CSS para ser aplicadas al elemento.

- tabindex - indica si el elemento puede obtener un focus de input.

- title - contiene un texto con informacion relacionada al elemento al que pertenece.

const titulo = document.querySelector(".titulo");

//titulo.setAttribute("contentEditable" , "true") // PARA EDITAR 
//titulo.setAttribute("dir","rtl")  // lo coloca en e centro
//titulo.setAttribute("title", "nuevo titulo") 


ATRIBUTOS DE INPUTS

- className
- value
- type
- accept
- form
- minlength
- placeholder
- required


ATRIBUTOS Style
- Usos y ejemplos 
- Propiedades Camel Case

 */

 /* 
 Clases, ClassList y Metodos de classList
 -Definicion y usos
 -add() - añade una clase
 -remove()- remueve una clase
 -item()- devuelve la clase del indice especificado
 -contains()- verifica si ese elemento posee o no, la clase especificada 
 -replace()- reemplaza una clase por otra
 -toggle()- si no tiene la clase especificada, la agg, si ya la tiene, la elimina.
-  

Obtencion y modificacion de elementos
-textContent - devuelve ele texto de cualquier nodo
-innerText- devuelve el texto visible de uno node element
-outerTex- devuelve el texto que se encuentra en las etiq HTML

innerHTML- devuelve el contenido Html de un elemento
outerHTML- devuelve el codigo Html completo del elemento

///// Creacion de elementos ///
-createElements()
-appendChild()
createDocumentFragment()
*/
//////////// LOS QUE MAS VAMOS A UTILIZAR ///////
const titulo = document.querySelector(".titulo");

let resultado =  titulo.textContent;
let resultado1 = titulo.innerHTML;
let resultado2 = titulo.outerHTML;

document.write(resultado)
document.write(resultado1)
document.write(resultado2)

///////////////////////////////////////////////////

const contenedor = document.querySelector(" .contenedor");

const item = document.createElement("LI");

const textDelItem = document.createTextNode("esta es una lista");

item.appendChild(textDelItem); /// para todos los nodes childs

console.log(item)

/////////////////////////////////////////
const contenedor = document.querySelector(" .contenedor");

const fragmento = document.createDocumentFragment();

for (i = 0; i < 20; i++){
    const item = document.createElement("LI");
    item.innerHTML = "Esta es una lista";
    fragmento.appendChild(item);
}

contenedor.appendChild(fragmento)


console.log(contenedor);

//Obtencion y modificacion de childs (hijos)
/* 
-FirstChild
-lastChild
-firstElementChild
-lastElementChild
-childNodes
-children

///METODOS DE CHILDS
- replaceChild()
- removeChild()
- HasChildNodes()
*/


const contenedor = document.querySelector(" .contenedor");

const parrafo = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo =     document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";
h2_antiguo = document.querySelector(".h2");

contenedor.replaceChild(h2_nuevo,h2_antiguo)

/* 
PROPIEDADES DE LOS PADRES (PARENTS)
-parentElement
-parentNode

PROPIEDADES DE HERMANOS (SIBLINGS)
-nextSibling
-previousSibling
-nextElementSibling
-previousElementSibling

NODOS - Extras
-closet()
*/

const contenedor = document.querySelector(" .contenedor");

const parrafo = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo =     document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

const h2_antiguo = document.querySelector(".h2");

console.log(h2_antiguo.nextElementSibling)

