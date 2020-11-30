const actulizar = document.querySelector('#Actualizar')
const valor = document.querySelector('#valor')
const tipo = document.querySelector('#dispositivo')
const matricula = document.querySelector('#matricula')
const mensajeUno = document.querySelector('#message-1')
let valores = {}

actulizar.addEventListener ( 'submit', (e) => {
    mensajeUno.textContent = 'Cargando...'
    e.preventDefault()
    if(tipo.value == "Teléfono") {
        valores = {"Telefono": valor.value, "matricula": matricula.value}
    } else {
        valores = {"Email": valor.value, "matricula": matricula.value}
    }
//    const valores = {valor: valor.value, matricula: matricula.value, tipo: tipo.value}
    //
//    console.log(valores)
//    messageTwo.textContent = 'Cargando ...'
//const busqueda = () =>  
    fetch('http://localhost:3000/api/alumno/contacto' ,{
        method: 'PATCH',
        body: JSON.stringify(valores),
        headers: { 'Content-Type': 'application/json' }}
        ).then( (response) => {
            console.log(JSON.stringify(response))
            response.json().then( (data) => {
                mensajeUno.textContent = data.error
           }).catch( () => mensajeUno.textContent = 'Actualización exitosa')
        })
})