const XMLHttprequest = require("xmlhttprequest").XMLHttpRequest; 
const API = "https://api.escuelajs.co/api/v1";

function obtenData(urlApi, callback) {
    let xhttp = new XMLHttprequest();

    xhttp.open("GET", urlApi, true)
    xhttp.onreadystatechange = (event) => {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            }  else {
                const error = new Error ("Error" + urlApi);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}


obtenData(`${API}/products`, (error1, data1) => {
    if (error1) return console.error(error1);
    obtenData(`${API}/products/${data1[1].id}`, (error2, data2) => {
            if (error2) return console.error(error2);
            obtenData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {
                if (error3) return console.error(error3);
                console.log(data1[0]);
                console.log(data2.title);
                console.log(data3.name);
            });
     });
});