var nombres = [];

function Colas (){

  this.almacen = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.empty = empty;
  this.print = print;

  function enqueue (element) {
    this.almacen.push(element);
  }

  function dequeue () {
    return this.almacen.shift();
  }

  function empty (){
    return this.almacen.length == 0;
  }

  function print(element) {
   return console.log(this.almacen);
  }
}

var nombre = new Colas();
nombre.enqueue("Gaby");
nombre.enqueue("Aileen");
nombre.enqueue("Pitt");
nombre.enqueue("Karla");
nombre.enqueue("Adriana");

nombre.print();

var apellido = new Colas();
apellido.enqueue("Trejo");
apellido.enqueue("Sanchez");
apellido.enqueue("Martinez");
apellido.enqueue("Nava");
apellido.enqueue("Hernandez");

apellido.print();

for (i = 0; i < 5; i++) {
  nombres.push(nombre.dequeue() + " " + apellido.dequeue());
}  // No utilizamos nombres.enqueue porque nombres no reconoce que es lo que hace, es por eso que debemos ponerle push.
// Para que nuestro for sepa que tiene que mandar estos nombres al arreglo vacio. los dequeue funcionan ya que estamos mandando a llamar la función con todo y paréntesis ().
document.write(nombres);
