const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=1ddfc9ac40a8115a8539731f4ee99ade&query=${latitude},${longitude}&units=f`

    request({url, json: true}, (error, {body}) => {
    if(error){
            callback('Unable to connect to forecast services');
       } else if (body.error) {
            callback('Unable to find forecast. Try another search');
       } else {
            callback(undefined, 
                `It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`
                );

       }

   })

}

module.exports = forecast