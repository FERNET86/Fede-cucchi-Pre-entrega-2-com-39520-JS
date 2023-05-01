let edad;
while (isNaN(edad) || edad < 18) {
  edad = prompt("Ingrese tu edad");
  if (edad === null) {
    // Si el usuario cancela la entrada, salimos del bucle.
    break;
  }
  if (isNaN(edad)) {
    alert("Debes ingresar tu edad en numeros");
  } else if (edad < 18) {
    alert("Edad incorrecta, debes ser mayor de 18 años para ingresar al carrito de bebidas.");
  }
}
if (edad >= 18) {
    nombreUsuario = prompt("ingrese su nombre");
    alert(`Bienvenido al carrito de bebidas ${nombreUsuario}`);
}

///constructor de productos
function Producto(bebida,marca,medida,precio) {
    this.bebida = bebida;
    this.marca = marca;
    this.medida = medida;
    this.precio = precio;

}

const producto1 = new Producto('Gin', 'Bombay', '750 Ml',  7000);
console.log(producto1);
const producto2 = new Producto('Whisky', 'Chivas Regal', '1 Litro',  14000);
console.log(producto2);
const producto3 = new Producto('Cerveza', 'Corona', '710 Ml' ,  700);
console.log(producto3);
const producto4 = new Producto('Vodka', 'Absolut', '700 Ml' ,  5100);
console.log(producto4);
const producto5= new Producto('Tequila', 'Jose Cuervo', '750 Ml' , 10000);
console.log(producto5);

/*si quiero cambier algun objeto, lo hago asi

producto1.precio = 7500;
console.log(producto1);
*/

//[como agregar “otro elemento”]

const Producto5 = ['Jose Cuervo', '750 Ml' , 10000];
Producto5.unshift('Tequila')
console.log( Producto5.length ); 
console.log(Producto5)
const pro5 = Producto5.slice(1, 4);
console.log(pro5)


/// un ejemplo de suma por 1 articulo de cada producto con su total
const Totalproductos = [ producto1.precio, producto2.precio, producto3.precio, producto4.precio];
///FOREACH (es igual al porCadaUno)

let total = 0;
Totalproductos.forEach((elem) => {
total = total + elem;
});

console.log('Total:' + total);

///FIND
///devuelve el primer resultado de la ocurrencia o 'undefined' si no existe


const carrito = [ {nombre: 'Gin', marca:'Gordon', precio:2500.25}, 
                {nombre: 'Whisky', marca:'JB', precio: 3050.70},
                {nombre: 'Vodka', marca:'Sernova', precio:2010},
                {nombre: 'Cerveza', marca:'Quilmes', precio:420.50}
                ];


const elementoBuscar = carrito.find((elem) => { return elem.nombre == 'Whisky'});
console.log(elementoBuscar);


const beb = carrito.filter((item) => {return item.nombre == 'whisky'});
console.log(beb);

if (carrito.some((elem) => {return elem.marca == 'JB'})) {

    console.log('Este carrito tendra un descuento cuando haga el checkout! ya que lleva un JB');
} else {
    console.log('este carrito no lleva descuento');
}

////Carrito con IVA
const carritoConIva = carrito.map((item) => { return {nombre: item.nombre, precio: item.precio *1.21}});

console.log(carritoConIva);

///hace una acumulacion de valores y devuelve un total

const totalCarrito = carrito.reduce((total,item) => { return total + item.precio}, 0);
console.log(totalCarrito);

///SORT
///para ordenar un array
///si el resultado devuelve > 0 pone el item2 antes que el item1
///si el resultado devuelve < 0 pone el item1 antes  que el item2
carrito.sort((item1,item2) => { return item1.precio - item2.precio});
console.log(carrito);



/* Esto era la primer pre-entrega,

let precioitem;
let nombreitem;
let cantidad;
let nombreusuario;
let total = 0; 
let ticket = ``;

alert("bienvenido al carrito de Bebidas!!!");
nombreusuario = prompt("ingrese su nombre");
do {
    nombreitem = prompt("ingrese nombre de la bebida");
    precioitem = Number(prompt("ingrese precio"));

    while (precioitem <0) {
        precioitem = Number(prompt("precio invalido, ingrese otro"));
    }

    cantidad = parseInt(prompt("ingrese cantidad"));

    while (cantidad < 0 ) {
        cantidad = Number(prompt("cantidad invalida, ingrese otra"));
    } 
        ticket = ticket + `nombre del item: ${nombreitem} \n precio unitatio: $${precioitem} cantidad: ${cantidad} subtotal: ${cantidad*precioitem} \n`
        total = total + cantidad * precioitem;
        
    
    opcion = prompt("Desea ingresar otro item");

} while(opcion == "si");

alert(`${ticket} El total para ${nombreusuario} es de: $${total}`);
*/ 
