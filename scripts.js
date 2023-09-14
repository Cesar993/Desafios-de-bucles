/* Imprimir impares 1-20 Usando un bucle, escribe un código que haga que console.logimprima 
todos los valores impares del 1 al 20. */

function impares() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }

    }
}
impares();

/* Disminuir múltiplos de 3 Usando un bucle, escribe un código que haga que console.log
imprima todos los valores que sean divisibles de manera uniforme por 3 del 100 al 0. */

function divTres() {
    for (let i = 100; i >= 0; i--) {
        if (i % 3 === 0) {
            console.log(i)
        }

    }
}
divTres();

/* Imprime la secuencia Usando un bucle, escribe un código que haga que console.log 
imprima los valores en esta secuencia  4, 2.5, 1, -0.5, -2, -3.5. */

function imprimSec() {
    for (let i = 4; i >= -4; i = i - 1.5) {

        console.log(i)


    }
}
imprimSec();

/* Sigma Escribe código que sume todos los valores del 1 al 100 en una variable sum y, 
al final, console.log dé como resultado 1 + 2 + 3 + ... + 98 + 99 + 100. 
Deberíamos obtener 5050 al final. */

function sigma() {
    sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
}
sigma();

/* Factorial Escribe código que multiplique todos los valores del 1 al 12 en una variable producty, 
al final, console.log dé como resultado  1 * 2 * 3 * ... * 10 * 11 * 12. 
Deberíamos obtener  479001600 al final.*/

function factorial() {
    producty = 1;
    for (let i = 1; i <= 12; i++) {
        producty *= i;
    }
    console.log(producty);
}
factorial();