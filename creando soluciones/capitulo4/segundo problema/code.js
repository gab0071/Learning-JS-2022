const ObtenerInformacion = (materia)=>{
    materias = { 
        fisica:        ["perez", "pedro","pepito","cofla","maria"],
        programacion: ["rodriguez", "pedro", "juan", "pepito"],
        logica:        ["hernandez", "pedro", "juan", "pepito", "cofla", "maria"],
        quimica:       ["mendez", "pedro", "juan", "pepito", "cofla", "maria"],

    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }

}

const mostrarInformacion = (materia)=>{
    let informacion = ObtenerInformacion(materia);

if (informacion !== false){
    let profesor = informacion[0][0];
    alumnos = informacion[0];
    alumnos.shift();
    document.write(`El profesor de <b>${informacion[1]}</b> es: <b style='color: orange'>${profesor}</b><br>
    Los alumnos son: <b style='color:blue'>${alumnos}</b><br><br>
    `);
}
}

const cantidadDeClases = (alumnos)=>{
    let informacion = ObtenerInformacion()
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumnos)) {
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `<b style='color:blue'>${alumnos}</b><b> esta en ${cantidadTotal} clases</b><br>
    Esta cursando las clases: <b style='color:violet'>${clasesPresentes}</b><br><br>
    `;
}


mostrarInformacion("fisica")
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("cofla"))










