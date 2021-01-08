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
var session_middleware = require("../public/middlewares/session")
var router_app = require("./rutas_app")
var session = require("express-session");
const { request } = require('http');


const app = express()

//Define paths for Express config
const publicDirectory = path.join(__dirname, '../public/')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//app.use("/app",router_app)
//Setup handlebars engine and views location
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
    secret: "aodnfporuifh3",
    resave: false,
    saveUninitialized: false
}));

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectory))


app.get('/entrar', (req,res) => {
    console.log(req)
    request(8081/validar/alumno);
    if (1>0) {}
    else {
        req.session.user_id = {'matricula':'19900212-ARTRIV-GO14'};
    }
    res.render('entrar', {
        title: 'Ingresar',
        name: 'César Rodriguez'
    })
 })

 app.get('/alumno/alta', (req,res) => {
    res.render('altaAlumno', {
        title: 'Registro',
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

app.use("/app",session_middleware)
app.use("/app",router_app)

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