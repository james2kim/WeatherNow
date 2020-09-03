const path = require ('path')
const express = require ('express')
const cors = require('cors')
const getGeolocation = require ('./utils/getGeolocation')
const getWeatherData = require('./utils/GetWeatherData')

const app = express()
app.use(cors())
const port = process.env.PORT || 9000

// Set up static directory to serve in express

    app.use(express.static(path.join(__dirname, '/client/build')))

    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, '/client/build'))
    })



app.get('/weather', (req,res) => {
    const address = req.query.address
    if (!address) {
        return  res.send({
            error: 'You must provide an address in query string'
        })
    } 
        
    getGeolocation(address, {latitude, longitude, location} = {})
    .then (response1 => {
        const {error} = response1
        if (response1.error) {
            return res.send({error})
        }
        const {latitude, longitude, location} = response1
        return getWeatherData(latitude,longitude)

    .then(response2 => {
        const {error} = response2
        if (response2.error) {
            return res.send({error})
        }
        const {forecast,precip, temperature, is_day, cloudcover, humidity, feelslike, local_time} = response2

        const date = new Date(local_time)

        res.json({
            address:req.query.address,
            forecast: forecast,
            location,
            precip,
            temperature,
            is_day,
            cloudcover,
            humidity,
            feelslike,
            local_time: date.toLocaleTimeString('en-US')
        })
      })
   })
   .catch(error => {
       res.send({error})
   })

})


app.listen(port, () => {
    console.log('Server is starting')
})