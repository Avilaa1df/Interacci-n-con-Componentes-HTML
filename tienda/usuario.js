class Usuario{
    constructor(nombre, email, rol = "cliente"){
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.activo = true;
    }

    saludo(){
        return `Hola mi nombre es ${this.nombre} y mi rol es ${this.rol}`;
    }

    desactivar(){
        this.activo = false;
        return "Estado de activacion cambiado exitosamente."
    }

    resumen(){
        if(this.activo == true){
            this.activo = "activo"
        }
        else{
            this.activo = "inactivo"
        }

        return `Nombre: ${this.nombre}; Email: ${this.email}; Rol: ${this.rol}; Estado: ${this.activo} `;
    }
}

class UsuarioVIP extends Usuario{
    constructor(nombre, email, membresia){
        super(nombre, email, "cliente VIP")
        this.membresia = membresia;
    }

    saludo(){
        return `${super.saludo()}. Mi membresia es ${this.membresia}.`;
    }

    beneficios(){
        return `Por ser nivel ${this.membresia}, tienes acceso a la sala VIP.`;
    }
}

//Checkpoint 1
// let usuario1 = new Usuario("Daniel", "dafeavqu@gmail.com");
// console.log(usuario1.saludo());
// console.log(usuario1.resumen());
// let usuario2 = new Usuario("Camilo", "camilo@gmail.com", "cajero");
// console.log(usuario2.saludo());
// console.log(usuario2.desactivar());
// console.log(usuario2.resumen());



//Checkpoint 2
// let usuariovip = new UsuarioVIP("Daniel", "dafeavqu@gmail.com", "gold");
// console.log(usuariovip.saludo());
// console.log(usuariovip.desactivar());
// console.log(usuariovip.resumen());

module.exports = {
    Usuario,
    UsuarioVIP
};