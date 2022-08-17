let free = false;


const validarCliente = (time)=> {
    let edad = prompt("Cual es tu edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("Puedes pasar gratis, porque son las 2AM");
            free = true;
        } else {
            alert(`Son las ${time}:00hs y puedes pasar pero tienes que pagar $15`);
        }
    } else {
        alert("Disculpa, no puedes pasar porque eres menor de edad");
    }

}

validarCliente(23);
validarCliente(1);
validarCliente(2);
