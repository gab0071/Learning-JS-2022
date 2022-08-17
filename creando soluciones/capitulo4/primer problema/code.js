/// CALCULADORA  con suma, resta, division, multiplicacion, potenciar, raiz cuadrada y cubica
class Calculadora{
    constructor(){}
    sumar(num1 , num2) {
    return parseInt(num1) + parseInt(num2);
    }

    resta(num1 , num2) {
    return parseInt(num1) - parseInt(num2);
    }

    division(num1 , num2) {
    return parseInt(num1) / parseInt(num2);
    }

    multiplicacion(num1 , num2) {
    return parseInt(num1) * parseInt(num2);
    }
    potenciar(num,exp){
        let numero = num;
        for (var i = 1 ; i < exp; i++) {
            numero = numero * num;
            
        }
        return numero;
    }
    raizCuadrada(num){
        return Math.sqrt(num);
    }
    raizCubica(num){
        return Math.cbrt(num);
    }

}


const calculadora = new Calculadora();

alert("¿Que operacion deseas realizar?");
let operacion = prompt("1 : suma, 2: resta, 3: division, 4: multiplicacion , 5: exponenciacion, 6: Raiz Cuadrada, 7: Raiz Cubica");

if (operacion == 1) {
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar ");
    resultado = calculadora.sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
} 

else if (operacion == 2) {
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numero para restar ");
    resultado = calculadora.resta(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
} 

else if (operacion == 3) {
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt("segundo numero para dividir ");
    resultado = calculadora.division(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
} 
else if (operacion == 4) {
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt("segundo numero para multiplicar ");
    resultado = calculadora.multiplicacion(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 5) {
    let numero1 = prompt("primer numero a potenciar");
    let numero2 = prompt("exponente");
    resultado = calculadora.potenciar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 6) {
    let numero1 = prompt("Conocer la raiz cuadrada de:");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 7) {
    let numero1 = prompt("Conocer la raiz cubica:");
    resultado = calculadora.raizCubica(numero1);
    alert(`tu resultado es ${resultado}`);
}
else {
    alert("no se ha encontrado la operacion");
}
