const Registrarme = document.querySelector('#Registrarme')
const nombre = document.querySelector('#nombre')
const apellidoPaterno = document.querySelector('#apellidoPaterno')
const apellidoMaterno = document.querySelector('#apellidoMaterno')
const fechaNacimiento = document.querySelector('#fechaNacimiento')
const carrera = document.querySelector('#carrera')
const telefono = document.querySelector('#telefono')
const email = document.querySelector('#email')
const calle = document.querySelector('#calle')
const numInterior = document.querySelector('#numInterior')
const unidad = document.querySelector('#unidad')
const numExterior = document.querySelector('#numExterior')
const ciudad = document.querySelector('#ciudad')
const estado = document.querySelector('#estado')
const colonia = document.querySelector('#colonia')


const mensajeUno = document.querySelector('#message-13')


Registrarme.addEventListener ( 'submit', (e) => {
    mensajeUno.textContent = 'Cargando...'
    e.preventDefault()
    const valores = {
                     nombre: nombre.value,
                     apellidoPaterno: apellidoPaterno.value,
                     apellidoMaterno: apellidoMaterno.value,
                     fechaNacimiento: fechaNacimiento.value,
                     calle: calle.value, 
                     numeroInterior: numInterior.value, 
                     tipoUnidad: unidad.value,
                     numeroExterior: numExterior.value,
                     ciudad: ciudad.value,
                     estado: estado.value,
                     colonia: colonia.value,
                     telefono: telefono.value,
                     carrera: carrera.value
                    }
//    console.log(valores)
//    messageTwo.textContent = 'Cargando ...'
//const busqueda = () =>  
    fetch('http://localhost:3000/api/alumno/alta' ,{
        method: 'POST',
        body: JSON.stringify({
                              "nombre": valores.nombre,
                              "apellidoPaterno": valores.apellidoPaterno,
                              "apellidoMaterno": valores.apellidoMaterno,
                              "fechaNacimiento": valores.fechaNacimiento,
                              "calle": valores.calle, 
                              "numeroInterior": valores.numeroInterior, 
                              "tipoUnidad": valores.tipoUnidad,
                              "numeroExterior": valores.numeroExterior,
                              "ciudad": valores.ciudad,
                              "estado": valores.estado,
                              "colonia": valores.colonia,
                              "telefono": valores.telefono,
                              "carrera": valores.carrera }),
        headers: { 'Content-Type': 'application/json' }}
        ).then( (response) => {
            var variable = response
            console.log(variable)
            response.json().then( (data) => {
                console.log(data.matricula)
                if (data.matricula)
                mensajeUno.textContent = '¡Registro exitoso! Matrícula:' + data.matricula
                else {
                mensajeUno.textContent = data.error
                }
           }).catch( () => mensajeUno.textContent = 'Registro Exitoso')
        })
})