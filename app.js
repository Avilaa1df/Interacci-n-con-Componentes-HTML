let contador = 0;
const contadorTareas = document.getElementById('contadorTareas');
const inputTarea = document.getElementById('nombreTarea');
const inputCategoria = document.getElementById('listaOpciones');
const mensajeConfirmacion = document.getElementById('tareaCreada');

function crearTarea(){
    const nombreTarea = inputTarea.value;
    const categoria = inputCategoria.value;

   
    if (nombreTarea === "") {
        const mensajeErrorNombre = document.createElement('p');
        mensajeErrorNombre.textContent = "Debes asignarle un nombre a la tarea antes de crearla";
        const contenedorMensajeErrorNombre = document.getElementById('contenedorMensajeErrorNombre');
        contenedorMensajeErrorNombre.appendChild(mensajeErrorNombre);
        return;
    }
    
    if (categoria === "sinCategoria") {
        const mensajeErrorCategoria = document.createElement('p');
        mensajeErrorCategoria.textContent = "Debes asignarle una categoria a la tarea antes de crearla";
        const contenedorMensajeErrorCategoria = document.getElementById('contenedorMensajeErrorCategoria');
        contenedorMensajeErrorCategoria.appendChild(mensajeErrorCategoria);
        return;
    }

    if(categoria === "otra"){
        const ingresoNombreCategoria = document.createElement('input');
        ingresoNombreCategoria.placeholder = "Ingresa la categoria";
        const nombreCategoria = ingresoNombreCategoria.value;
        const agregarNombreCategoria = document.createElement('button');
        agregarNombreCategoria.textContent = "Agregar"
        const contenedorNombreCategoria = document.getElementById('contenedorCategoriaOtra');
        contenedorNombreCategoria.appendChild(ingresoNombreCategoria);
        contenedorNombreCategoria.appendChild(agregarNombreCategoria);
        return nombreCategoria;
    }
    
   
    const contenedorTareas = document.getElementById('contenedor-tareas-creadas');
    const nuevaTareaDiv = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    const textoTarea = document.createElement('span');
    const btnEliminarTarea = document.createElement('button');
    btnEliminarTarea.textContent = "Eliminar Tarea";
   
    if (categoria === "trabajo"){
        icono = "💼";
    }
    else if (categoria === "estudio"){
        icono = "📚";
    }
    else if (categoria === "personal"){
        icono = "🏠";
    }
    else if (categoria === "urgente"){
        icono = "🔴";
    } 
    else{
        icono = "📌";
    }


    textoTarea.textContent = ` ${nombreTarea} / ${categoria} ${icono} `;

    nuevaTareaDiv.appendChild(checkbox);
    nuevaTareaDiv.appendChild(textoTarea);
    nuevaTareaDiv.appendChild(btnEliminarTarea);
    contenedorTareas.appendChild(nuevaTareaDiv);
    contador++;

    btnEliminarTarea.addEventListener("click", function(){
        nuevaTareaDiv.remove();
        contador = contador - 1;
        contadorTareas.textContent = contador;
    })

    contadorTareas.textContent = contador;
    inputTarea.value = "";
    contenedorMensajeErrorNombre.remove();
    contenedorMensajeErrorCategoria.remove();

}
