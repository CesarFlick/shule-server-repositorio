const request = require('request')

const obtenerAlumno = (datos,callback) => {
    request({
        url: 'http://localhost:8081/api/alumno/' + datos.matricula,
        method: 'GET',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'}
    }, (error, {body}) => {
        console.log(body)
        callback(body)
})}

module.exports = obtenerAlumno