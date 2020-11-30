const request = require('request')

const desinscribirAlumno = (datos,callback) => {
    request({
        url: 'http://localhost:8081/api/cursos/' + datos.claveCurso + '/alumno',
        method: 'DELETE',
        body: JSON.stringify({ "matricula": datos.matricula }),
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'}
    }, (error, {body}) => {
        console.log(body)
        callback(body)
})}

module.exports = desinscribirAlumno