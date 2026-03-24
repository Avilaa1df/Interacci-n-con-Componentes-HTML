//contador con JS
//
const contador = {
  valor: 0,
  elemento: document.getElementById('contador' ),
  incrementar: function() { this.actualizar(1); },
  decrementar: function() { this.actualizar(-1); },
  actualizar: function(cambio) {this.valor += cambio;
    this.elemento.textContent = this.valor;
    this.elemento.style.color = this.valor >= 10 ? 'red' : 'yellow';
  }
};
document.getElementById('btnIncrementar').addEventListener('click', () => contador.incrementar());
document.getElementById('btnDecrementar').addEventListener('click', () => contador.decrementar());