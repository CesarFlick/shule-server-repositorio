const request = require('request')

const asignarProfesor = (datos,callback) => {
    request({
        url: 'http://localhost:8081/api/profesor/' + datos.trabajador + '/asignar/' + datos.claveCurso,
        method: 'PUT',
        body: JSON.stringify({}),
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'}
    }, (error, {body}) => {
        console.log(body)
        callback(body)
})}

module.exports = asignarProfesor