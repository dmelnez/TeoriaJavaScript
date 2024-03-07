/**
 * 
 */



function pepe(){

let nombre = null || "David"

document.write(nombre);
}





////////////////////////////
// TIPOS DE VARIABLES /////
///////////////////////////

// Variable de Tipo Local (Viven segun el Bloque en el que se han Definido)
// let variableLocao = 9;

// Variable de Tipo Global (Pueden ser llamadas desde cualquier lugar, 
// independientemente de donde se definan).
// var variableGlobal = 9;

// Varibale Tipo Constante (Siempre estan cargadas en la Memoria)
// cons variableConstante = 9;


////////////////////////////
// TIPOS DE ESCRITURA /////
///////////////////////////


// Escribir en una Alerta 
//	alert("Hola");

// Escribir Directamente en el Document 
// 	document.write("Hola");

// Escribir en La Consola 
// console.log("Hola");


////////////////////////////
///// TIPO DE LECTURA /////
//////////////////////////

// El metodo prompt("INTRODUZCA SU NOMBRE: "), se utiliza para solicitar al usuario algun dato.



/////////////////////////////
////////// ARRAY ///////////
///////////////////////////

// Creacion de un Array
// let arrayLocal = ["Pepito", 99, 999.99]

// El metodo lenght -> Permite saber el Tamaño del Array, sabiendo que el valor de las posciones es -1
// arrayLocal.length

// Acceder por Posicion a un Array
// arrayConstante[2]


/////////////////////////////////////////
////// CREACION DE UNA FUNCION///////////
/////////////////////////////////////////

// Para crear una Funcion, se llamara a metodo function "nombreFuncion()"
// function nombreCliente(){}

// Para llamar a una funcion desde un .html, se realizara un <button onclick="nombreFuncion()">PULSE AQUI</button>


//////////////////////////////////////////////////////
///// SABER LA TIPOLOGIA DE DATO DE UNA VARIABLE ////
/////////////////////////////////////////////////////

// El metodo typeof() Permite visualizar el tipo de dato que se almacena.
// typeof(nombreVariable);

///////////////////////////////////////
///// CASTEO DE TIPOLOGIA DE DATOS ////
//////////////////////////////////////

// Si se desea pasar de tipo de variable a un string. Se utilizara el Casteo Directo

// Ejemplo:
// let numero = 9;
// let numeroAString = String(numero) ;


///////////////////////////////////////
///// GENERAR UN OBJETO (DTOS) ///////
//////////////////////////////////////

// Generar un constructor: 
/* 

function coches(marca, modelo, anioFabricacion){

	this.marca = marca;
	this.modelo = modelo;
	this.anioFabricacion = anioFabricacion;

}

*/


// Introducir los campos necesarios Pedidos por el USUARIO, y crear una copia de Coche con los campos que lo componen
/*


function pedirCamposCoche(){
	
	var marcaUsu = prompt("NOMBRE DE VEHICULO: ");
	var modeloUsu = prompt("NOMBRE DE MODELO: ");
	var anioUsu = prompt("ANIO DE VEHICULO: ");
	
	var cocheUsuario = new coches(marcaUsu, modeloUsu, anioUsu);
}

*/ 



