console.log('Client side javascript file is loaded!')


const cursosRespuesta = document.querySelector('form')
const search = document.querySelector('input')
const clave = document.querySelector('#claveCurso')
const nombre = document.querySelector('#nombreCurso')
const docente = document.querySelector('#docenteCurso')
const creditos = document.querySelector('#creditosCurso')
const messageTwo = document.querySelector('#message-2')

//messageOne.textContent = 'From JavaScript'

cursosRespuesta.addEventListener ( 'submit', (e) => {
    e.preventDefault()
    const codigoCurso = search.value
//    messageTwo.textContent = 'Cargando ...'
    fetch('http://localhost:3000/api/cursos?codigoCurso='+ codigoCurso).then( (response) => {
        response.json().then( (data) => {
//            console.log(data.error)
            if(data.error){
                messageTwo.textContent = data.error
            } else {
            messageTwo.textContent = ''
            clave.textContent = data[0].CLAVE
            nombre.textContent = data[0].NOMBRE
            docente.textContent = data[0].DOCENTE
            creditos.textContent = data[0].CREDITOS
        }
//            console.log(data[0].CLAVE)
        })
    })
})