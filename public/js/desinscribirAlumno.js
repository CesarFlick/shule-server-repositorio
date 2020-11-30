const desinscripcionAlumno = document.querySelector('#Desinscribir')
const clave = document.querySelector('#clave')
const matricula = document.querySelector('#matricula')
const mensajeUno = document.querySelector('#message-1')

//const fetch = require('node-fetch');



//let alumno = { "matricula": "19950227-GUIROD-CA17" }

desinscripcionAlumno.addEventListener ( 'submit', (e) => {
    mensajeUno.textContent = 'Cargando...'
    e.preventDefault()
    const valores = {clave: clave.value, matricula: matricula.value}
    console.log(valores)
//    messageTwo.textContent = 'Cargando ...'
//const busqueda = () =>  
    fetch('http://localhost:3000/api/alumno/baja?claveCurso=' + valores.clave + '&' + 'matricula=' + valores.matricula ,{
        method: 'DELETE',
        body: JSON.stringify({ "matricula": valores.matricula }),
        headers: { 'Content-Type': 'application/json' }}
        ).then( (response) => { 
                console.log(response),
                mensajeUno.textContent = "Baja exitosa"
})
})

//.then( (response) => {
//        response.json().then( (data) => {
//            console.log(data.error)
//            if(data.error){
//                messageTwo.textContent = data.error
//            } else {

            //}
     //   })
   // })
//})