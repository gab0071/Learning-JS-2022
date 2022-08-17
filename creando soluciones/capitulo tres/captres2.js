class App{
    constructor(descargas,puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;

    }
    abrir(){
        if (this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("app iniciada");
        }
    }
    cerrar(){
        if (this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    
    instalar(){
        if (this.instalada == false){
            this.instalada = true;
            alert("app instalada correctamente");
        }
    }
    desinstalar(){
        if (this.instalada == true){
            this.instalada = false;
            alert("app desinstalada correctamente");
        }
    }
    appInfo(){
        return `
        Descargas: <b> ${this.descargas}</b></br>
        Puntucion: <b> ${this.puntuacion}</b></br>
        Peso:      <b> ${this.peso}</b></br>
        `

    }
}


app1 = new App("16k", "5 estrellas", "900mb");
app2 = new App("15k", "4 estrellas", "800mb");
app3 = new App("14k", "3 estrellas", "700mb");
app4 = new App("13k", "1 estrellas", "600mb");
app5 = new App("12k", "2 estrellas", "500mb");
app6 = new App("11k", "5 estrellas", "400mb");
app7 = new App("10k", "3 estrellas", "300mb");

// app.instalar();
// app.abrir();
// app.cerrar();
// app.desinstalar();

document.write(`
${app1.appInfo()}<br>
${app2.appInfo()}<br>
${app3.appInfo()}<br>
${app4.appInfo()}<br>
${app5.appInfo()}<br>
${app6.appInfo()}<br>
${app7.appInfo()}<br>

`);