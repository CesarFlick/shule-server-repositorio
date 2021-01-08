var express = require('express');
const hbs = require('hbs')
const path = require('path')


const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
var router = express.Router();



router.get('', (req,res) => {
    res.render('index', {
        title: 'Sistema de Gestión Escolar',
        name: 'César Rodríguez'
    })
    console.log(req.session.user_id)
})


router.get('/profesores', (req,res) => {
    res.render('profesores', {
        title: 'Profesores',
        name: 'César Rodriguez'
    })
})

router.get('/ayuda', (req,res) => {
        res.render('ayuda', {
        helpText: 'Aquí encontrarás ayuda.',
        title: 'Ayuda',
        name: 'César Rodríguez'
        })
})

router.get('/cursos', (req,res) => {
    res.render('cursos', {
        helpText: 'Aquí encontrarás información de las materias.',
        title: 'Cursos',
        name: 'César Rodríguez'
    })
})

router.get('/alumnos', (req,res) => {
    res.render('alumnos', {
        title: 'Alumnos',
        name: 'César Rodríguez'
    })
})

router.get('/alumno/inscribir', (req,res) => {
    res.render('inscripcionCurso', {
        title: 'Alumnos',
        name: 'César Rodríguez'
    })
})

router.get('/alumno/alta', (req,res) => {
    res.render('altaAlumno', {
        title: 'Registro',
        name: 'César Rodríguez'
    })
})

router.get('/alumno/baja', (req,res) => {
    res.render('desinscripcionCurso', {
        title: 'Alumnos',
        name: 'César Rodríguez'
    })
})

router.get('/alumno/contacto', (req,res) => {
    res.render('actualizarContacto', {
        title: 'Alumnos',
        name: 'César Rodríguez'
    })
})

router.get('/alumno/direccion', (req,res) => {
    res.render('actualizarDireccion', {
        title: 'Alumnos',
        name: 'César Rodríguez'
    })
})

router.get('/profesor/contacto', (req,res) => {
    res.render('actualizarContactoProfesor', {
        title: 'Profesores',
        name: 'César Rodríguez'
    })
})

router.get('/profesor/direccion', (req,res) => {
    res.render('actualizarDireccionProfesor', {
        title: 'Profesores',
        name: 'César Rodríguez'
    })
})

router.get('/profesor/asignar', (req,res) => {
    res.render('asignarProfesor', {
        title: 'Profesores',
        name: 'César Rodríguez'
    })
})

module.exports = router;