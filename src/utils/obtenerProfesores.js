const request = require('request')

const obtenerProfesores = (datos,callback) => {
    request({
        url: 'http://localhost:8081/api/profesor/' + datos.numeroEmpleado,
        method: 'GET',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'}
    }, (error, {body}) => {
        console.log(body)
        callback(body)
})}

module.exports = obtenerProfesores