const actulizar = document.querySelector('#Actualizar')
const matricula = document.querySelector('#marticula')
const calle = document.querySelector('#calle')
const numeroInterior = document.querySelector('#numeroInterior')
const tipoUnidad = document.querySelector('#tipoUnidad')
const numeroExterior = document.querySelector('#numeroExterior')
const ciudad = document.querySelector('#ciudad')
const estado = document.querySelector('#estado')
const colonia = document.querySelector('#colonia')

const mensajeUno = document.querySelector('#message-1')


actulizar.addEventListener ( 'submit', (e) => {
    mensajeUno.textContent = 'Cargando...'
    e.preventDefault()
    const valores = {
                     calle: calle.value, 
                     numeroInterior: numeroInterior.value, 
                     tipoUnidad: tipoUnidad.value,
                     numeroExterior: numeroExterior.value,
                     ciudad: ciudad.value,
                     estado: estado.value,
                     colonia: colonia.value,
                     matricula: matricula.value
                    }
//    console.log(valores)
//    messageTwo.textContent = 'Cargando ...'
//const busqueda = () =>  
    fetch('http://localhost:3000/api/alumno/direccion' ,{
        method: 'PATCH',
        body: JSON.stringify({"calle": valores.calle, 
                              "numeroInterior": valores.numeroInterior, 
                              "tipoUnidad": valores.tipoUnidad,
                              "numeroExterior": valores.numeroExterior,
                              "ciudad": valores.ciudad,
                              "estado": valores.estado,
                              "colonia": valores.colonia,
                              "matricula": valores.matricula}),
        headers: { 'Content-Type': 'application/json' }}
        ).then( (response) => {
            console.log(JSON.stringify(response))
            response.json().then( (data) => {
                mensajeUno.textContent = data.error
           }).catch( () => mensajeUno.textContent = 'Actualización exitosa')
        })
})