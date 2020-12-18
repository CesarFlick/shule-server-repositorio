const path = require('path')
const bodyParser = require('body-parser');
const express = require('express')
const { response } = require('express')
const hbs = require('hbs')
const obtenerCursos = require('./utils/obtenerCursos.js')
const inscribirAlumno = require('./utils/inscribirAlumnos.js')
const actualizarContactoAlumno = require('./utils/actualizarContactoAlumno.js')
const actualizarDireccionAlumno = require('./utils/actualizarDireccion.js')
const actualizarContactoProfesor = require('./utils/actualizarContactoProfesor.js')
const actualizarDireccionProfesor = require('./utils/actualizarDireccionProfesor.js')
const desinscribirAlumno = require('./utils/desinscribirAlumno.js')
const asignarProfesor = require('./utils/asignarProfesor.js')
const obtenerAlumnos = require('./utils/obtenerAlumnos.js')
const obtenerProfesores = require('./utils/obtenerProfesores.js')
const altaAlumno = require('./utils/altaAlumno.js')


const app = express()

//Define paths for Express config
const publicDirectory = path.join(__dirname, '../public/')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectory))


app.get('', (req,res) => {
    res.render('index', {
        title: 'Sistema de Gestión Escolar',
        name: 'César Rodríguez'
    })
})

app.get('/entrar', (req,res) => {
    res.render('entrar', {
        title: 'Ingresar',
        name: 'César Rodriguez'
    })
})

app.get('/profesores', (req,res) => {
    res.render('profesores', {
        title: 'Profesores',
        name: 'César Rodriguez'
    })
})


app.get('/ayuda', (req,res) => {
    res.render('ayuda', {
        helpText: 'Aquí encontrarás ayuda.',
        title: 'Ayuda',
        name: 'César Rodríguez'
    })
})


app.get('/cursos', (req,res) => {
    res.render('cursos', {
        helpText: 'Aquí encontrarás información de las materias.',
        title: 'Cursos',
        name: 'César Rodríguez'
    })
})

app.get('/alumnos', (req,res) => {
    res.render('alumnos', {
        title: 'Alumnos',
        name: 'César Rodríguez'
    })
})

app.get('/alumno/inscribir', (req,res) => {
    res.render('inscripcionCurso', {
        title: 'Alumnos',
        name: 'César Rodríguez'
    })
})

app.get('/alumno/alta', (req,res) => {
    res.render('altaAlumno', {
        title: 'Registro',
        name: 'César Rodríguez'
    })
})

app.get('/alumno/baja', (req,res) => {
    res.render('desinscripcionCurso', {
        title: 'Alumnos',
        name: 'César Rodríguez'
    })
})

app.get('/alumno/contacto', (req,res) => {
    res.render('actualizarContacto', {
        title: 'Alumnos',
        name: 'César Rodríguez'
    })
})

app.get('/alumno/direccion', (req,res) => {
    res.render('actualizarDireccion', {
        title: 'Alumnos',
        name: 'César Rodríguez'
    })
})

app.get('/profesor/contacto', (req,res) => {
    res.render('actualizarContactoProfesor', {
        title: 'Profesores',
        name: 'César Rodríguez'
    })
})

app.get('/profesor/direccion', (req,res) => {
    res.render('actualizarDireccionProfesor', {
        title: 'Profesores',
        name: 'César Rodríguez'
    })
})

app.get('/profesor/asignar', (req,res) => {
    res.render('asignarProfesor', {
        title: 'Profesores',
        name: 'César Rodríguez'
    })
})

//*************** ENPOINTS HACIA API */
app.get('/api/cursos', (req,res) => {
    if(req.query.codigoCurso == '')
    return res.send ({
        error: 'Debes proveer un filtro de busqueda'
    })
//    console.log(req)
    obtenerCursos(req.query.codigoCurso, (cursos) => {
        res.send(cursos)
    })
})

//*********** Endpoint para inscribir un alumno a un curso */
app.put('/api/alumno', (req,res) => {
    inscribirAlumno(req.query, (response) => {
    res.send(response)})
})

//*********** Endpoint para registrar a un alumno en el sistema */
app.post('/api/alumno/alta', (req,res) => {
    altaAlumno(req.body, (response) => {
    res.send(response)})
})

//*********** Endpoint para obtener información de un alumno
app.get('/api/alumno', (req,res) => {
    obtenerAlumnos(req.query, (response) => {
    res.send(response)})
})

//*********** Endpoint para desinscribir un alumno a un curso */
app.delete('/api/alumno/baja', (req,res) => {
    desinscribirAlumno(req.query, (response) => {
    res.send(response)})
})

//*********** Endpoint para actualizar el contacto de un alumno*/
app.patch('/api/alumno/contacto', (req,res) => {
//    console.log(req.body)
    actualizarContactoAlumno(req.body, (response) => {
    res.send(response)})
})

//*********** Endpoint para actualizar la dirección de un alumno*/
app.patch('/api/alumno/direccion', (req,res) => {
    //    console.log(req.body)
        actualizarDireccionAlumno(req.body, (response) => {
        res.send(response)})
    })

//*********** Endpoint para obtener la información de un profesor
app.get('/api/profesor', (req,res) => {
    obtenerProfesores(req.query, (response) => {
    res.send(response)})
})

//*********** Endpoint para actualizar el contacto de un profesor*/
app.patch('/api/profesor/contacto', (req,res) => {
    //    console.log(req.body)
        actualizarContactoProfesor(req.body, (response) => {
        res.send(response)})
    })


//*********** Endpoint para actualizar dirección de un profesor*/
app.patch('/api/profesor/direccion', (req,res) => {
    //    console.log(req.body)
        actualizarDireccionProfesor(req.body, (response) => {
        res.send(response)})
    })

//*********** Endpoint para asignar un profesor a un curso*/
app.put('/api/profesor/asignar', (req,res) => {
    //    console.log(req.body)
        asignarProfesor(req.query, (response) => {
        res.send(response)})
    })

app.get('*', (req,res) => {
    res.render('404', {
        title: '404',
        name: 'César Rodríguez',
        errorMessage: 'Página no encontrada.'

    })
})

app.get('*', (req,res) => {
    res.render('404', {
        title: '404',
        name: 'César Rodríguez',
        errorMessage: 'Página no encontrada.'

    })
})


app.listen(3000, () => {
    console.log('Servidor en puerto 3000.')
})