const request = require('request')


const actualizarDireccionAlumno = (inputBody,callback) => {
    request({
        url: 'http://localhost:8081/api/alumno/' + inputBody.matricula + '/direccion',
        method: 'PATCH',
        body: JSON.stringify({ "calle": inputBody.calle,
                                "numeroInterior": inputBody.numeroInterior,
                                "tipoUnidad": inputBody.tipoUnidad,
                                "numeroExterior": inputBody.numeroExterior,
                                "ciudad": inputBody.ciudad,
                                "estado": inputBody.estado,
                                "colonia": inputBody.colonia}),
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


module.exports = actualizarDireccionAlumno