//Estados
// Pendiente
// Cumplido 
// Rechazado 

const promise = new Promise((resolve, reject) => {
        resolve ("He todo ha sido correcto")
}); 

const cows = 10; 

const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`)
     } else {
        reject("There is not cows on the farm")
     }
}); 

countCows.then(result => {
    console.log(result)
}).catch((error) => {
    console.log(error)
}).finally(()=> {console.log("Finaly")})