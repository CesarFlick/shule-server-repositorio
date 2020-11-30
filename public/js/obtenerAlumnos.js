const obtenerAlumno = document.querySelector('#Consultar')
const matricula = document.querySelector('#matricula')
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

obtenerAlumno.addEventListener ( 'submit', (e) => {
    e.preventDefault()
    const valores = {matricula: matricula.value}
    console.log(valores)
    fetch('http://localhost:3000/api/alumno?matricula=' + valores.matricula ,{
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }}
        ).then( (response) => { 
                console.log(response),
                response.json().then( (data) => {
                    nombre.textContent = data.Nombre
                    apellidoPaterno.textContent = data.apellidoPaterno
                    apellidoMaterno.textContent = data.apellidoMaterno
                    fechaNacimiento.textContent = data.fechaNacimiento
                    carrera.textContent = data.carrera
                    calle.textContent = data.direccion.calle
                    numInterior.textContent = data.direccion.numeroInterior
                    numExterior.textContent = data.direccion.numeroExterior
                    ciudad.textContent = data.direccion.ciudad
                    estado.textContent = data.direccion.estado
                    colonia.textContent = data.direccion.colonia
                    telefono.textContent = data.contacto.telefono
                    email.textContent = data.contacto.email

               })
})
})

