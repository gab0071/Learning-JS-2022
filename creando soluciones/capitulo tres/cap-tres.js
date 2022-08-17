class Celular {
    constructor(color,peso,rdp,resolucionDeCamara,ram){
        this.color = color;
        this.peso = peso;
        this.rdPantalla = rdp;
        this.rdCamara = resolucionDeCamara;
        this.ram = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("el celular ya esta apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true) {
            alert("reiniciando celular");

        } else {
            alert("el celular esta apagado");
        }
    }
    tomarFotos(){
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`grabando video en ${this.resolucionDeCamara}`);
    }
    mobileInfo(){
        return `
        color:<b>${this.color}</b></br>
        peso: <b>${this.peso}</b></br>
        rdp:  <b>${this.rdPantalla}</b></br>
        ram:  <b>${this.ram}</b></br>
        resolucion de video:  <b>${this.rdCamara}</b></br>
        `
    }
}


class CelularAltaGama extends Celular {
    constructor(color,peso,rdp,resolucionDeCamara,ram,camaraExtra){
        super(color,peso,rdp,resolucionDeCamara,ram);
        this.resolucionDeCamaraExtra = camaraExtra;
    }
    grabarVideoLento(){
        alert("estas grabando en modo lento");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `resolucion de camara Extra: ${this.resolucionDeCamaraExtra}`;
    }
}



// celular1 = new Celular("negro", "150gr", "5'", "full hd", "2gb");
// celular2 = new Celular("rojo", "250gr", "4'", "full hd", "7gb");
// celular3 = new Celular("rosado", "350gr", "7'", "full hd", "10gb");


// celular1.presionarBotonEncendido();
// celular1.tomarFotos();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEnCendido();

celular1 = new CelularAltaGama("rojo", "125g", "5.2'", "4k", "2GB", "full hd");
celular2 = new CelularAltaGama("negro", "135g", "8.2'", "5k", "4GB", "hd");






document.write(`
     ${celular1.infoAltaGama()} <br>
     ${celular2.infoAltaGama()} <br>

`);



