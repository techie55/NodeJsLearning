const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode.js')
const { response } = require('express')
const forecast = require('./utils/forecast.js')

const app = express()
const port = process.env.PORT || 3000 

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
    if(!req.query.address){
        return res.send ({
            error: 'You must provide an address'
        })
    }
    geocode(req.query.address, (error, {latitude, longitude, location} = {})=>{
        if(error){
            return res.send ({
                error
            })
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return res.send ({
                    error
                })
            }

            res.send({
                location,
                forecast: forecastData,
                address: req.query.address
            })
        })

    })
})

app.get('/products', (req, res) => {
    res.send({
        products: []
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


app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})