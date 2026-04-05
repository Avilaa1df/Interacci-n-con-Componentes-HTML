class Producto{
    constructor(nombre, precio, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    calcularTotal(){
        return(this.precio + (this.precio*0.19));
    }

    aplicarDescuento(porcentaje){
        return(this.precio - (this.precio*(porcentaje/100)));  
    }

    resumen(){
        return `Nombre: ${this.nombre}; Categoria: ${this.categoria}; Precio: ${this.precio}`;
    }

    targeta(){
        return `Nombre: ${this.nombre}; Categoria: ${this.categoria}; Precio: ${this.calcularTotal()}`;
    }

}

class productoDigital extends Producto{
    constructor(nombre, precio, licencia){
        super(nombre, precio);
        this.licencia = licencia;
    }

    calcularTotal(){
        return this.precio;
    }

    targeta(){
        return `Nombre: ${this.nombre}; Precio: ${this.calcularTotal()}; Licencia: ${this.licencia}`;
    }
}

//Checkpoint 3
// let producto1 = new Producto("galletas", 4000, "Alimentos");
// let producto2 = new Producto("Jabon", 12000, "Aseo");

// console.log(producto1.aplicarDescuento(15));
// console.log(producto1.resumen());
// console.log(producto2.aplicarDescuento(30));
// console.log(producto2.resumen());

// console.log(producto1.targeta());
// console.log(producto2.targeta());

//Checkpoint 4
// let productodigital = new productoDigital("Membresia de videojuego", 1200000, "de por vida");

// console.log(productodigital.calcularTotal());
// console.log(productodigital.targeta());

module.exports = {
    Producto,
    productoDigital
};
