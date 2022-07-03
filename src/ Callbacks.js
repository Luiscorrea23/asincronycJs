function sum(num1, num2) {
    let result = num1 + num2
    return result
}

function calc(num1, num2, calculo) {
   
   let calculo = calculo (num1, num2); 
   return calculo
}

console.log(calc(3,21,sum));

setTimeout(() => {
    console.log("test")
}, 2000);

var saludo = (nombre) => {
    console.log(`Hola ${nombre}`)
}

setTimeout(saludo, 2000, "Luis")
