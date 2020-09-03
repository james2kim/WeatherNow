const axios = require ('axios')

const getWeatherData = async (latitude, longitude) => {
    const url = `http://api.weatherstack.com/current?access_key=365f888ff1e4ced2fc985100ceec02bf&query=${latitude},${longitude}&units=f`
        try 
            {
                const request = await axios.get(url)
                if (request.data.error) {
                    return {
                        error: `Coordinate Not Found. Try another pair of coordinates.`
                    }
                } else {
                    const {weather_descriptions, temperature, precip, is_day,cloudcover, humidity, feelslike} =  request.data.current
                    return {
                        forecast: `${weather_descriptions[0]}: It is currently ${temperature}° F`,
                        temperature,
                        precip,
                        is_day,
                        cloudcover,
                        humidity,
                        feelslike,
                        local_time: request.data.location.localtime

                    }
                }
            } 
        catch (err) {
            return {
                error: `Unable to connect to WeatherStack.`
            }
        }  
    } 

    module.exports = getWeatherData