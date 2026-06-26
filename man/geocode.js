let req = require("request")

const geocode = (address,callback)=>{

url =`https://api.weatherapi.com/v1/current.json?key=eebc71126480455db69213430262406&q=${address}&aqi=no`

req({url , json:true},(error,response)=>{
    if(error){
        callback("Unable to connect to weather service",undefined)
    }else if(response.body.error){
            callback(response.body.error.message,undefined)

    }else if(response.body.location.name === undefined){
           callback("Unable to find location. Try another search.",undefined)
    }else{
        callback(undefined,{
         lat: response.body.location.lat,
         lon: response.body.location.lon
        }
     
    )
    
    }

})

}
module.exports = geocode