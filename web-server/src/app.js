const path = require('path')

const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

// app.use()
app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/help', (req, res) => {
    res.send('Help Page')
})

app.get('/about', (req, res) => {
    res.send('<h1>About page</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Fremont CA',
        forecast: 'It is cold'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})