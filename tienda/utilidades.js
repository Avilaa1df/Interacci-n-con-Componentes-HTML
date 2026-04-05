 function calcularTotalCarrito(productos){
    let total = 0;
    for( let i = 0; i < productos.length; i++){
        total = total + productos[i];
    }  
    
    return `Total del carrito: ${total}`;
}

module.exports = {
    calcularTotalCarrito
};
