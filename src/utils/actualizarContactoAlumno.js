const request = require('request')

let actExitosa = { "mensaje": "Actualización Exitosa" }


const actualizarContactoAlumno = (inputBody,callback) => {
    request({
        url: 'http://localhost:8081/api/alumno/' + inputBody.matricula + '/contacto',
        method: 'PATCH',
        body: JSON.stringify(inputBody),
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'}
    }, (error, res ,{body} = {}) => {
//        console.log(res.statusCode)
        if(res.statusCode = 404) {
 //       console.log(res.body)
//    console.log(body)
        callback(res.body)
        }
        else {
           callback({'mensaje': 'Actualización Exitosa'})
        }
})}


module.exports = actualizarContactoAlumno