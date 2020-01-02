const request = require('request')
const forecast=(latitude,longitude, callback)=>{
    const url ="https://api.darksky.net/forecast/af2fb396aa4bbc50e48067f6242d5022/"+latitude+","+longitude+"?units=si"
    request({url:url, json:true},(err,res)=>{
        if(err)
        {
            callback('Unable to connect...', undefined)
        }
        else
        {
            if(res.body.error)
            {
                callback('Missing/Incorrect info...', undefined)
            }
            else
            {
                callback(undefined,
                    'It is currently '+res.body.currently.temperature+' degrees out. There is '+res.body.currently.precipProbability+'% chance of rain'
                )  
            }
        }
    })
}
module.exports= forecast