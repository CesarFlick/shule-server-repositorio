const request = require('request')


const altaAlumno = (inputBody,callback) => {
    request({
        url: 'http://localhost:8081/api/alumno',
        method: 'POST',
        body: JSON.stringify({
            "Nombre": inputBody.nombre,
            "apellidoPaterno": inputBody.apellidoPaterno,
            "apellidoMaterno": inputBody.apellidoMaterno,
            "fechaNacimiento": inputBody.fechaNacimiento,
            "direccion":{
                  "id": "DIR-989",
                  "calle": inputBody.calle,
                  "numeroInterior": inputBody.numeroInterior,
                  "tipoUnidad": inputBody.tipoUnidad,
                  "numeroExterior": inputBody.numeroExterior,
                  "ciudad": inputBody.ciudad,
                  "estado": inputBody.estado,
                  "colonia": inputBody.colonia
            }, 
            "contacto": {
                        "id": "CTO-2322", 
                        "tipo": "Telefono",
                        "valor": inputBody.telefono
                      },
            "carrera": inputBody.carrera,
            "password": inputBody.password
          }),
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'}
    }, (error, res ,{body} = {}) => {
        bodyResp = JSON.parse(res.body)
//        matricula = bodyResp.matricula
        if(res.statusCode = 404) {
 //       console.log(res.body)
//    console.log(body)
        callback(res.body)
        }
        else {
           callback(bodyResp)
        }
})}


module.exports = altaAlumno