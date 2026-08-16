function buscarEvento() {
    let evento = document.getElementById("evento").value;
    let fecha = document.getElementById("fechaEvento").value;
    let ubicacion = document.getElementById("ubicacion").value;
    let asistentes = document.getElementById("asistentes").value;
    
    if (evento && fecha && ubicacion) {
        alert(`Buscando eventos: ${evento} en ${ubicacion} el ${fecha} para ${asistentes}`);
    } else {
        alert("Por favor, completa todos los campos de búsqueda.");
    }
}

