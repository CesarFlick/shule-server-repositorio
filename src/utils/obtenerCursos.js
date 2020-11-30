const request = require('request')

const obtenerCursos = (curso,callback) => {
    console.log(curso)
    var url = 'http://localhost:8081/api/cursos'// + curso
    if( curso != '""') {
        var url = `http://localhost:8081/api/cursos/${curso}`
    }
    console.log(url)
    request({ url: url, json: true}, (error, {body}) => {
        console.log(body)
        callback(body)
    }
    )
}
module.exports = obtenerCursos