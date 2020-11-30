const actulizar = document.querySelector('#Actualizar')
const valor = document.querySelector('#valor')
const tipo = document.querySelector('#dispositivo')
const trabajador = document.querySelector('#trabajador')
const mensajeUno = document.querySelector('#message-1')
let valores = {}

actulizar.addEventListener ( 'submit', (e) => {
    mensajeUno.textContent = 'Cargando...'
    e.preventDefault()
    if(tipo.value == "Teléfono") {
        valores = {"Telefono": valor.value, "trabajador": trabajador.value}
    } else {
        valores = {"Email": valor.value, "trabajador": trabajador.value}
    }

//    console.log(valores)
//    messageTwo.textContent = 'Cargando ...'
//const busqueda = () =>  
    fetch('http://localhost:3000/api/profesor/contacto' ,{
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