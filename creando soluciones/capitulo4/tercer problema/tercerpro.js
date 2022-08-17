let materias = { 
        fisica:        ["perez", "pedro","pepito","cofla","maria"],
        programacion: ["rodriguez", "pedro", "juan", "pepito"],
        logica:        ["hernandez", "pedro", "juan", "pepito", "cofla", "maria"],
        quimica:       ["mendez", "pedro", "juan", "pepito", "cofla", "maria"],

    }

const inscribir = (alumno,materia) => {
    personas = materias[materia];
    if (personas.length >= 21) {
        document.write(`Lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas <br><br>`);
    } else {
        personas.push(alumno);
        if (materia == "fisica"){
            materias = { 
                fisica: personas,
                programacion: materias["programacion"],
                logica:  materias["logica"],
                quimica: materias["quimica"],
        
            }
        }   else if (materia == "programacion"){
            materias = { 
                fisica: materias["fisica"],
                programacion: personas,
                logica:  materias["logica"],
                quimica: materias["quimica"],
        
            }
        }   else if (materia == "logica"){
             materias = { 
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica:  personas,
                quimica: materias["quimica"],
        
             }
            }else if (materia == "quimica"){
            materias = { 
            fisica: materias["fisica"],
            programacion: materias["programacion"],
            logica:  materias["logica"],
            quimica: personas,
    
             }
        }
        document.write(`Felicidades ${alumno}!  te has inscrito a ${materia} correctamente <br><br>`)
    }
}


document.write(materias['fisica'] + "<br>")


inscribir("pedrito", "fisica");
inscribir("sofia", "fisica");
inscribir("hailey", "fisica");
inscribir("kendall", "fisica");
inscribir("damon", "fisica");
inscribir("helena", "fisica");
inscribir("katerina", "fisica");
inscribir("cillian", "fisica");
inscribir("robby", "fisica");
inscribir("zendaya", "fisica");
inscribir("tom holland", "fisica");
inscribir("tom holland", "fisica");
inscribir("tom holland", "fisica");
inscribir("tom holland", "fisica");
inscribir("tom holland", "fisica");
inscribir("tom holland", "fisica");
inscribir("tom holland", "fisica");
inscribir("tom holland", "fisica");


document.write("<br>" + materias['fisica'])