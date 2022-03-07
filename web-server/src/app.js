const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath =  path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
//Set the view engine to Handlebars
app.set('view engine', 'hbs')
//set the views path to point to templates folder instead of the default views path
app.set('views', viewsPath)
//Set the partials path
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Johnson Michael'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Johnson Michael'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: "Help page. Will be updated soon",
        title: 'Help',
        name: 'Johnson Michael'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Fremont CA',
        forecast: 'It is cold'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMessage: 'Help article not found',
        title: 'Help',
        name: 'Johnson Michael'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: 'Page not found',
        title: 'Error',
        name: 'Johnson Michael'
    })
})
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})