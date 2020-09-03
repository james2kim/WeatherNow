const axios = require ('axios')

const getGeolocation = async (address) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiamFtZXMya2ltIiwiYSI6ImNrZWh1d3d0YTE5bjMycnBvZnJib3J3MXIifQ.Kb94JeoZJ0MhIhYiWBbV-Q&limit=1`
    try  
        {
            const request = await axios.get(url)
            if (request.data.features.length === 0) {
                return  {
                    error: 'Unable to find location. Try another search.'
                }
            } 
            else  
                {
                    const response = request.data.features[0]
                    const {center, place_name} = response
                    const [longitude, latitude] = center
                    return  {
                        latitude,
                        longitude,
                        location:place_name
                    }
                }
        }   
        catch (err) 
            {
                return {
                    error: 'Unable to connect to location services' 
                } 
            }
 }



 module.exports = getGeolocation