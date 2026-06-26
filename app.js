const console = require("node:console")
const { parse } = require("node:path")
let req = require("request")
const weather = require("./man/forcast.js")
const geocode = require("./man/geocode.js")
  





geocode(process.argv[2], (err , read)=>{
    console.log("Error:",err)
    console.log("result:",read)
        weather(read.lat,read.lon, (err , read)=>{
            console.log("Error:",err)
            console.log("result:",read)
        })
})





