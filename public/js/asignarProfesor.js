const asignarProfesor = document.querySelector('#Asignar')
const clave = document.querySelector('#clave')
const trabajador = document.querySelector('#trabajador')
const mensajeUno = document.querySelector('#message-1')

//const fetch = require('node-fetch');



//let alumno = { "matricula": "19950227-GUIROD-CA17" }

asignarProfesor.addEventListener ( 'submit', (e) => {
    mensajeUno.textContent = 'Cargando...'
    e.preventDefault()
    const valores = {clave: clave.value, trabajador: trabajador.value}
    console.log(valores)
//    messageTwo.textContent = 'Cargando ...'
//const busqueda = () =>  
    fetch('http://localhost:3000/api/profesor/asignar?claveCurso=' + valores.clave + '&' + 'trabajador=' + valores.trabajador ,{
        method: 'PUT',
        body: JSON.stringify({}),
        headers: { 'Content-Type': 'application/json' }}
        ).then( (response) => { 
                console.log(response),
                mensajeUno.textContent = "Alta exitosa"
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