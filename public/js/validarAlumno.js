const Acceder = document.querySelector('#Acceder')
const usuario = document.querySelector('#matricula')
const mensaje = document.querySelector('#message-1')

Acceder.addEventListener ( 'submit', (e) => {
    mensaje.textContent = 'Cargando...'
    e.preventDefault()
    const valores = {usuario: usuario.value}
    console.log(valores)
    fetch('http://localhost:3000/api/validar/alumno?matricula=' + valores.usuario ,{
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }}
        ).then(
//                 (response) => { 
//                 mensaje.textContent = response
//                 console.log(response),
//                 response.json().then( (data) => {
//                     mensaje.textContent = data.status
//                })
// }
)
})

