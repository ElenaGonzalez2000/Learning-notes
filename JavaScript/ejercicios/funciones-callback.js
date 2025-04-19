// funciones anidadas

function exterior() {
    function interior() {
        console.log("Soy la función interior.");
    }
    interior(); // Llama a la función interior desde la función exterior
}
exterior();

// funciones callback

function tarea(tarea, callback) {
    console.log(`Se esta ejecutanto: ${tarea}`);
    setTimeout(() => {
        console.log(`Se termino la tarea: ${tarea}`)
        callback();
    }, 2000);
}

function terminar() {
    console.log("Todas las tareas completadas");
}

tarea("leer", terminar);
