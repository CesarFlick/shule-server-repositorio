const request = require('request')

const inscribirAlumno = (datos,callback) => {
    request({
        url: 'http://localhost:8081/api/cursos/' + datos.claveCurso + '/alumno',
        method: 'PUT',
        body: JSON.stringify({ "matricula": datos.matricula }),
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'}
    }, (error, {body}) => {
        console.log(body)
        callback(body)
})}

module.exports = inscribirAlumno