const cron = require('node-cron')
const express = require('express')
const app = express()
const PORT = 3000

const statuses = {
    0 : "Closed",
    1 : "Open"
}

function randomStatus(){
    return statuses[Math.round(Math.random())]
}

const liftreport = {
    reportDate: randomStatus(),
    lastUpdated:  randomStatus(),
    broadwayExpress:  randomStatus(),
    stumpAlleyExpress:  randomStatus(),
    faceLiftExpress:  randomStatus(),
    unboundExpress:  randomStatus(),
    goldRushExpress:   randomStatus(),
    discoveryExpress:  randomStatus() ,
    chair12:   randomStatus(),
    chair13:   randomStatus(),
    chair14:   randomStatus(),
    chair23:   randomStatus(),
    panoramaLower:   randomStatus(),
    panoramaUpper:   randomStatus(),
    rollerCoasterExpress:  randomStatus(),
    high5Express:   randomStatus(),
    chair7:   randomStatus(),
    chair8:   randomStatus(),
    canyonExpress:   randomStatus(),
    schoolyardExpress:   randomStatus(),
    chair20:   randomStatus(),
    chair21:   randomStatus(),
    chair22:   randomStatus(),
    villageGondola:   randomStatus(),
    cloudNine :   randomStatus(),
    eagleExpress :   randomStatus(),
    chair25 :   randomStatus(),
}

let stream = {...liftreport}


cron.schedule("*/2 * * * * *", () => {
    stream = {...liftreport}
})


/////////////////////////
//Controller
/////////////////////////
app.get("/", (req,res) => {
    res.json(stream)
})

app.listen(PORT, () => console.log("WERE LIVE"))