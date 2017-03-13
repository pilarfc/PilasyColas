var nombres = [];  // Aquí es donde se van a guardar los nombres concatenados

function Pilas (){

  var almacen = [];

  this.push = function(element) {
    almacen.push(element);
  };

  this.pop = function() {
    return almacen.pop();
  };


  this.peek = function () {
    return almacen[almacen.length - 1];
  };

  this.isEmpty = function (){
    return almacen.length == 0;
  };

  this.size = function() {
    return almacen.length;
  };

  this.clear = function() {
    almacen = [];
  };

  this.print = function (){
    console.log(almacen.toString());
  };
} // Hasta aquí todo es un constructor

var nombre = new Pilas();
nombre.push("Gaby");
nombre.push("Aileen");
nombre.push("Pitt");
nombre.push("Karla");
nombre.push("Adriana");

nombre.print();

var apellido = new Pilas();
apellido.push("Trejo");
apellido.push("Sanchez");
apellido.push("Martinez");
apellido.push("Nava");
apellido.push("Hernandez");

apellido.print();


for (i = 0; i < 5; i++) {
  nombres.push(nombre.pop() + " " + apellido.pop());
}  // El for tiene que inicializar en cero, i tiene que ser menor a cinco para que lea tanto los nombres como los apellidos, de manera completa.
// El push agrega los nombres concatenados, el pop va borrando del arreglo anterior y los agrega al arreglo nombres ya juntos.
document.write(nombres);
