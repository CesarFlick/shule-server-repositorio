const request = require('request')

const validarAlumno = (datos,callback) => {
//    console.log(datos)
    request({
        url: 'http://localhost:8081/api/alumno/' + datos.matricula + "?registro=" + datos.registro,
        method: 'GET',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'}
    }, (error, {body}) => {
        callback(body)
})}

module.exports = validarAlumno