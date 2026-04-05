const {Producto, productoDigital} = require(`./productos.js`);
const {Usuario, UsuarioVIP} = require(`./usuario.js`);
const {calcularTotalCarrito} = require(`./utilidades.js`)
let productos =[];

let cliente = new Usuario("Carlos", "carlos@gmail.com", "cliente");
let clienteVIP = new UsuarioVIP("Andrea", "andrea@gmail.com", "gold");
let administrador = new Usuario("Daniel", "daniel@gmail.com", "administrador");

let producto1 = new Producto("Churrusco", 10000, "Aseo");
productos.push(producto1.calcularTotal());
let producto2 = new Producto("Cubio", 800, "Alimentos");
productos.push(producto2.calcularTotal());
let productoDigital1 = new productoDigital("Creditos videojuego", 25000, "de por vida");
productos.push(productoDigital1.calcularTotal());
let productoDigital2 = new productoDigital("Suscripcion mensual", 15000, "un mes");
productos.push(productoDigital2.calcularTotal());

clienteVIP.desactivar();
console.log(clienteVIP.resumen());
console.log(cliente.resumen());
console.log(administrador.resumen());

console.log(producto1.aplicarDescuento(20));

console.log(producto1.targeta());
console.log(producto2.targeta());
console.log(productoDigital1.targeta());
console.log(productoDigital2.targeta());

console.log(calcularTotalCarrito(productos));




