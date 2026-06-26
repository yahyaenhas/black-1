let req = require("request")
let weather =  (lat,lon, callback ) => {
    let url2 = `https://api.weatherapi.com/v1/current.json?key=eebc71126480455db69213430262406&q=${lat},${lon}&aqi=no`
    req({url:url2,json:true},(error,response)=>{
        if(error){
            callback(undefined,"Unable to connect to weather service")
        }else if(response.body.error){
            callback(undefined,response.body.error.message)
        }else{
            callback(undefined,`${response.body.location.name} is ${response.body.current.condition.text} and temperature is ${response.body.current.temp_c}°C`)
        }
    })
}
module.exports = weather