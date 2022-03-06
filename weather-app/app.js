const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast');
const { exit } = require('process');
// const url = 'http://api.weatherstack.com/current?access_key=1ddfc9ac40a8115a8539731f4ee99ade&query=37.548,-121.988'

// request({url: url, json: true}, (error, response) => {
// //   console.error('error:', error); // Print the error if one occurred
// //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// //   console.log('statusCode:', response); // Print the response status code if a response was received
// //   console.log('body:', body); // Print the HTML for the Google homepage.

//     console.log(response.body.current)
//     console.log('It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
// });

const address = process.argv[2];

if(!address) {
    console.log('Please provide a valid address')
    exit
} else {
    geocode(address, (error, {latitude, longitude, location} = {}) => {
        if(error) {
            return console.log('Error', error)
        } 
        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return console.log('Error', error)
            } 
            console.log(location)
            console.log(forecastData)
        
        })
    
    })
    
}
