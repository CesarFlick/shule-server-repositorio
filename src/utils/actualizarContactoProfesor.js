const request = require('request')

const actualizarContactoProfesor = (inputBody,callback) => {
    request({
        url: 'http://localhost:8081/api/profesor/' + inputBody.trabajador + '/contacto',
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

module.exports = actualizarContactoProfesor