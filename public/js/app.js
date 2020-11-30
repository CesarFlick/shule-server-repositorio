console.log('Client side javascript file is loaded!')

let infoCursoTabla = document.querySelector("#infoCurso")
let cursosTabla = document.querySelector("#cursosTabla");
const cursosRespuesta = document.querySelector('form')
//    const botonBorrarTabla = document.querySelector('#borrar')
const search = document.querySelector('input')
const messageTwo = document.querySelector('#message-2')

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }

  fetch('http://localhost:3000/api/cursos?codigoCurso=""').then( (response) => {
    response.json().then( (data) => {
//            console.log(data.error)
        if(data.error){
            messageTwo.textContent = data.error
        } else {
            let cabeceraCursos = Object.keys(data[0]);
            generateTableHead(cursosTabla, cabeceraCursos);
            generateTable(cursosTabla, data);
    }
//            console.log(data[0].CLAVE)
    })
})

//messageOne.textContent = 'From JavaScript'
//botonBorrarTabla.addEventListener("click", function() {
 //   document.getElementById("cursosTabla").innerHTML = '';
//},false);



cursosRespuesta.addEventListener ( 'submit', (e) => {
    e.preventDefault()
    const codigoCurso = search.value
    messageTwo.textContent = 'Cargando ...'
    fetch('http://localhost:3000/api/cursos?codigoCurso='+ codigoCurso).then( (response) => {
        response.json().then( (data) => {
            console.log(data.error)
            if(data.error){
                messageTwo.textContent = data.error
            } else {
                // Borrado de capa
                document.getElementById("cursosTabla").innerHTML = '';
                document.getElementById("infoCurso").innerHTML = '';
                messageTwo.textContent = ''
                // Creación de nueva tabla en base a nueva data
                let cabeceraCursos = Object.keys(data[0]);
                generateTableHead(infoCursoTabla, cabeceraCursos);
                generateTable(infoCursoTabla, data);
        }
            console.log(data[0].CLAVE)
        })
    })
})