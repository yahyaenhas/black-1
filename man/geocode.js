let req = require("request")

const geocode = (address,callback)=>{
// console.log(process.argv[2])
url =`https://api.weatherapi.com/v1/current.json?key=eebc71126480455db69213430262406&q=${address}&aqi=no`

req({url , json:true},(error,response)=>{
    if(error){
        callback(undefined,"Unable to connect to weather service")
    }else if(response.body.error){
        console.log(response.body)
            callback(undefined,response.body.error.message)

    }else if(response.body.location.name === undefined){
           callback("Unable to find location. Try another search.",undefined)
    }else{
        callback(undefined,{
         lat: response.body.location.lat,
         lon: response.body.location.lon
        }
     
    )
        // weather(lat,lon,callback)
    }

})

}
module.exports = geocode